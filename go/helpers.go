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
