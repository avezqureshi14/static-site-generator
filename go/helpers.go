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
