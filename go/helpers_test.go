package main

import (
	"context"
	"strings"
	"testing"
	"time"
)

func TestDefaultTimeout(t *testing.T) {
	if defaultTimeout(0) != 2*time.Second {
		t.Fatal("timeout")
	}
}

func TestDefaultWorkers(t *testing.T) {
	if defaultWorkers(0) != 1 {
		t.Fatal(defaultWorkers(0))
	}
}

func TestDefaultQueue(t *testing.T) {
	if defaultQueue(0) != 1 {
		t.Fatal("queue")
	}
}
