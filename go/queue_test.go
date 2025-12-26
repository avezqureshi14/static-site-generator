package main

import "testing"

func TestQueueRejectsWhenFull(t *testing.T) {
	q := NewQueue(1)
	if !q.Push(Job{ID: "a"}) {
		t.Fatal("first push")
	}
	if q.Push(Job{ID: "b"}) {
		t.Fatal("second push should fail")
	}
}
