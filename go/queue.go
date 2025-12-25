package main

import "sync"

type Job struct {
	ID   string
	Name string
}

type Queue struct {
	mu    sync.Mutex
	items []Job
	max   int
}

func NewQueue(max int) *Queue {
	if max < 1 {
		max = 1
	}
	return &Queue{max: max}
}

func (q *Queue) Push(job Job) bool {
	q.mu.Lock()
	defer q.mu.Unlock()
	if len(q.items) >= q.max {
		return false
	}
	q.items = append(q.items, job)
	return true
}

func (q *Queue) Pop() (Job, bool) {
	q.mu.Lock()
	defer q.mu.Unlock()
	if len(q.items) == 0 {
		return Job{}, false
	}
	job := q.items[0]
	q.items = q.items[1:]
	return job, true
}

func (q *Queue) Len() int {
	q.mu.Lock()
	defer q.mu.Unlock()
	return len(q.items)
}
