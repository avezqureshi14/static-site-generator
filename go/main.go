package main

import (
	"context"
	"encoding/json"
	"net/http"
	"os"
	"os/signal"
	"time"
)

func main() {
	pool := NewPool(4, 32, 2*time.Second)
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt)
	defer stop()
	go pool.Run(ctx)

	mux := http.NewServeMux()
	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("ok\n"))
	})
	mux.HandleFunc("/v1/jobs", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}
		var job Job
		if err := json.NewDecoder(r.Body).Decode(&job); err != nil || job.ID == "" {
			http.Error(w, "bad job", http.StatusBadRequest)
			return
		}
		if !pool.Submit(job) {
			http.Error(w, "queue full", http.StatusServiceUnavailable)
			return
		}
		w.WriteHeader(http.StatusAccepted)
	})
	srv := &http.Server{Addr: ":8081", Handler: mux}
	go srv.ListenAndServe()
	<-ctx.Done()
	shut, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()
	_ = srv.Shutdown(shut)
	pool.Wait()
}
