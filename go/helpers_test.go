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

func TestSubmitFull(t *testing.T) {
	p := NewPool(1, 1, time.Second)
	if !p.Submit(Job{ID: "a", Name: "n"}) {
		t.Fatal("first")
	}
	if p.Submit(Job{ID: "b", Name: "m"}) {
		t.Fatal("full")
	}
}

func TestLen(t *testing.T) {
	q := NewQueue(3)
	q.Push(Job{ID: "a"})
	if q.Len() != 1 {
		t.Fatal(q.Len())
	}
}

func TestClipShort(t *testing.T) {
	if clipName("  hi ") != "hi" {
		t.Fatal(clipName("hi"))
	}
}

func TestBarePort(t *testing.T) {
	if barePort(":8081") != "8081" {
		t.Fatal(barePort(":8081"))
	}
}

func TestIdlePoll(t *testing.T) {
	if idlePoll() != 5*time.Millisecond {
		t.Fatal(idlePoll())
	}
}

func TestHealthBody(t *testing.T) {
	if healthBody() != "ok" {
		t.Fatal(healthBody())
	}
}

func TestQueueCap(t *testing.T) {
	if NewQueue(7).Cap() != 7 {
		t.Fatal("cap")
	}
}

func TestBlankName(t *testing.T) {
	if !blankName("   ") {
		t.Fatal("spaces")
	}
}

func TestSameID(t *testing.T) {
	if !sameID("Ab", "ab") {
		t.Fatal("case")
	}
}

func TestDefaultPoolSize(t *testing.T) {
	if defaultPoolSize() != 4 {
		t.Fatal(defaultPoolSize())
	}
}

func TestReadTimeout(t *testing.T) {
	if readTimeout() != 5*time.Second {
		t.Fatal(readTimeout())
	}
}

func TestQueue_a(t *testing.T) {
	q := NewQueue(1)
	if !q.Push(Job{ID: "a"}) {
		t.Fatal("a")
	}
	if q.Len() != 1 {
		t.Fatal(q.Len())
	}
}

func TestQueue_ab(t *testing.T) {
	q := NewQueue(2)
	if !q.Push(Job{ID: "a"}) {
		t.Fatal("a")
	}
	if !q.Push(Job{ID: "b"}) {
		t.Fatal("b")
	}
	if q.Len() != 2 {
		t.Fatal(q.Len())
	}
}

func TestQueue_abc(t *testing.T) {
	q := NewQueue(3)
	if !q.Push(Job{ID: "a"}) {
		t.Fatal("a")
	}
	if !q.Push(Job{ID: "b"}) {
		t.Fatal("b")
	}
	if !q.Push(Job{ID: "c"}) {
		t.Fatal("c")
	}
	if q.Len() != 3 {
		t.Fatal(q.Len())
	}
}

func TestQueue_abcd(t *testing.T) {
	q := NewQueue(4)
	if !q.Push(Job{ID: "a"}) {
		t.Fatal("a")
	}
	if !q.Push(Job{ID: "b"}) {
		t.Fatal("b")
	}
	if !q.Push(Job{ID: "c"}) {
		t.Fatal("c")
	}
	if !q.Push(Job{ID: "d"}) {
		t.Fatal("d")
	}
	if q.Len() != 4 {
		t.Fatal(q.Len())
	}
}

func TestQueue_abcde(t *testing.T) {
	q := NewQueue(5)
	if !q.Push(Job{ID: "a"}) {
		t.Fatal("a")
	}
	if !q.Push(Job{ID: "b"}) {
		t.Fatal("b")
	}
	if !q.Push(Job{ID: "c"}) {
		t.Fatal("c")
	}
	if !q.Push(Job{ID: "d"}) {
		t.Fatal("d")
	}
	if !q.Push(Job{ID: "e"}) {
		t.Fatal("e")
	}
	if q.Len() != 5 {
		t.Fatal(q.Len())
	}
}

func TestQueue_abcdefgh(t *testing.T) {
	q := NewQueue(8)
	if !q.Push(Job{ID: "a"}) {
		t.Fatal("a")
	}
	if !q.Push(Job{ID: "b"}) {
		t.Fatal("b")
	}
	if !q.Push(Job{ID: "c"}) {
		t.Fatal("c")
	}
	if !q.Push(Job{ID: "d"}) {
		t.Fatal("d")
	}
	if !q.Push(Job{ID: "e"}) {
		t.Fatal("e")
	}
	if !q.Push(Job{ID: "f"}) {
		t.Fatal("f")
	}
	if !q.Push(Job{ID: "g"}) {
		t.Fatal("g")
	}
	if !q.Push(Job{ID: "h"}) {
		t.Fatal("h")
	}
	if q.Len() != 8 {
		t.Fatal(q.Len())
	}
}

func TestQueue_xy(t *testing.T) {
	q := NewQueue(2)
	if !q.Push(Job{ID: "x"}) {
		t.Fatal("x")
	}
	if !q.Push(Job{ID: "y"}) {
		t.Fatal("y")
	}
	if q.Len() != 2 {
		t.Fatal(q.Len())
	}
}

func TestQueue_z(t *testing.T) {
	q := NewQueue(1)
	if !q.Push(Job{ID: "z"}) {
		t.Fatal("z")
	}
	if q.Len() != 1 {
		t.Fatal(q.Len())
	}
}

func TestHold_a_queue_of_six_holds_six_jobs(t *testing.T) {
	q := NewQueue(6)
	for i := 0; i < 6; i++ {
		if !q.Push(Job{ID: string(rune('a' + i%26)), Name: "n"}) {
			t.Fatal(i)
		}
	}
	if q.Len() != 6 {
		t.Fatal(q.Len())
	}
}

func TestHold_seven_jobs_need_a_queue_of_at_least_seve(t *testing.T) {
	q := NewQueue(7)
	for i := 0; i < 7; i++ {
		if !q.Push(Job{ID: string(rune('a' + i%26)), Name: "n"}) {
			t.Fatal(i)
		}
	}
	if q.Len() != 7 {
		t.Fatal(q.Len())
	}
}

func TestHold_nine_fits_when_the_cap_is_nine(t *testing.T) {
	q := NewQueue(9)
	for i := 0; i < 9; i++ {
		if !q.Push(Job{ID: string(rune('a' + i%26)), Name: "n"}) {
			t.Fatal(i)
		}
	}
	if q.Len() != 9 {
		t.Fatal(q.Len())
	}
}

func TestHold_ten_is_the_cap_I_used_in_a_load_note(t *testing.T) {
	q := NewQueue(10)
	for i := 0; i < 10; i++ {
		if !q.Push(Job{ID: string(rune('a' + i%26)), Name: "n"}) {
			t.Fatal(i)
		}
	}
	if q.Len() != 10 {
		t.Fatal(q.Len())
	}
}

func TestHold_twelve_jobs_stay_under_a_cap_of_twelve(t *testing.T) {
	q := NewQueue(12)
	for i := 0; i < 12; i++ {
		if !q.Push(Job{ID: string(rune('a' + i%26)), Name: "n"}) {
			t.Fatal(i)
		}
	}
	if q.Len() != 12 {
		t.Fatal(q.Len())
	}
}

func TestHold_sixteen_is_enough_for_a_small_burst(t *testing.T) {
	q := NewQueue(16)
	for i := 0; i < 16; i++ {
		if !q.Push(Job{ID: string(rune('a' + i%26)), Name: "n"}) {
			t.Fatal(i)
		}
	}
	if q.Len() != 16 {
		t.Fatal(q.Len())
	}
}
