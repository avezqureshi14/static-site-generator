package main

import (
	"context"
	"sync"
	"time"
)

type Pool struct {
	queue   *Queue
	workers int
	timeout time.Duration
	wg      sync.WaitGroup
}

func NewPool(workers int, queueMax int, timeout time.Duration) *Pool {
	if workers < 1 {
		workers = 1
	}
	if timeout <= 0 {
		timeout = 2 * time.Second
	}
	return &Pool{queue: NewQueue(queueMax), workers: workers, timeout: timeout}
}

func (p *Pool) Submit(job Job) bool {
	return p.queue.Push(job)
}

func (p *Pool) Run(ctx context.Context) {
	for i := 0; i < p.workers; i++ {
		p.wg.Add(1)
		go func() {
			defer p.wg.Done()
			for {
				select {
				case <-ctx.Done():
					return
				default:
				}
				job, ok := p.queue.Pop()
				if !ok {
					time.Sleep(5 * time.Millisecond)
					continue
				}
				workCtx, cancel := context.WithTimeout(ctx, p.timeout)
				_ = job
				<-workCtx.Done()
				cancel()
			}
		}()
	}
}

func (p *Pool) Wait() {
	p.wg.Wait()
}
