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

func TestQueueFifo(t *testing.T) {
	q := NewQueue(4)
	q.Push(Job{ID: "a"})
	q.Push(Job{ID: "b"})
	first, _ := q.Pop()
	if first.ID != "a" {
		t.Fatal(first.ID)
	}
}

func TestQueueEmptyPop(t *testing.T) {
	if _, ok := NewQueue(2).Pop(); ok {
		t.Fatal("empty")
	}
}

func TestDepthStartsEmpty(t *testing.T) {
	p := NewPool(2, 8, 0)
	if p.Depth() != 0 {
		t.Fatal(p.Depth())
	}
}
