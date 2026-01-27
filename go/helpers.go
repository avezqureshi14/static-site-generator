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
