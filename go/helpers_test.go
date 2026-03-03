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

func TestJobOK(t *testing.T) {
	if jobOK(Job{ID: "a"}) {
		t.Fatal("missing name")
	}
	if !jobOK(Job{ID: "a", Name: "n"}) {
		t.Fatal("should pass")
	}
}

func TestClipName(t *testing.T) {
	long := strings.Repeat("a", 100)
	if len(clipName(long)) != 80 {
		t.Fatal(len(clipName(long)))
	}
}

func TestIDSpaces(t *testing.T) {
	if idOK("ab c") {
		t.Fatal("space")
	}
	if !idOK("abc") {
		t.Fatal("ok")
	}
}

func TestShutdownClamp(t *testing.T) {
	if shutdownWait(time.Minute) != 3*time.Second {
		t.Fatal("clamp")
	}
}

func TestListenAddr(t *testing.T) {
	if listenAddr("") != ":8081" {
		t.Fatal(listenAddr(""))
	}
	if listenAddr("9090") != ":9090" {
		t.Fatal(listenAddr("9090"))
	}
}
