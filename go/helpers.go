package main

import (
	"context"
	"net/http"
	"strings"
	"time"
)

func defaultTimeout(d time.Duration) time.Duration {
	if d <= 0 {
		return 2 * time.Second
	}
	return d
}

func defaultWorkers(n int) int {
	if n < 1 {
		return 1
	}
	return n
}

func defaultQueue(n int) int {
	if n < 1 {
		return 1
	}
	return n
}

func jobOK(job Job) bool {
	return job.ID != "" && job.Name != ""
}

func cleanName(name string) string {
	return strings.TrimSpace(name)
}

func clipName(name string) string {
	name = strings.TrimSpace(name)
	if len(name) > 80 {
		return name[:80]
	}
	return name
}

func idOK(id string) bool {
	return id != "" && !strings.ContainsAny(id, " \t") && len(id) <= 64
}

func shutdownWait(d time.Duration) time.Duration {
	if d <= 0 || d > 10*time.Second {
		return 3 * time.Second
	}
	return d
}

func idlePoll() time.Duration {
	return 5 * time.Millisecond
}

func healthBody() string {
	return "ok"
}

func acceptedStatus() int {
	return http.StatusAccepted
}

func fullStatus() int {
	return http.StatusServiceUnavailable
}

func listenAddr(port string) string {
	if port == "" {
		return ":8081"
	}
	return ":" + port
}

func barePort(port string) string {
	return strings.TrimPrefix(port, ":")
}

func healthStatus() int {
	return http.StatusOK
}

func badJobStatus() int {
	return http.StatusBadRequest
}

func methodStatus() int {
	return http.StatusMethodNotAllowed
}

func abandoned(ctx context.Context) bool {
	return ctx.Err() != nil
}

func (q *Queue) Cap() int {
	q.mu.Lock()
	defer q.mu.Unlock()
	return q.max
}

func defaultPoolSize() int {
	return 4
}
