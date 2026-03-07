package com.example.side;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class JobServiceTest {
    @Test
    void stopsAtTheLimit() {
        JobService jobs = new JobService(1);
        assertTrue(jobs.submit("a", "one"));
        assertFalse(jobs.submit("b", "two"));
    }

    @Test
    void blankId() {
        assertFalse(new JobService(4).submit("  ", "name"));
    }


    @Test
    void duplicateId() {
        JobService jobs = new JobService(4);
        assertTrue(jobs.submit("a", "first"));
        assertFalse(jobs.submit("a", "second"));
        assertEquals("first", jobs.find("a").orElseThrow());
    }


    @Test
    void trimsName() {
        assertEquals("ada", new JobService(2).trimName(" ada "));
    }


    @Test
    void zeroLimitBecomesOne() {
        assertEquals(1, JobService.normalizeLimit(0));
    }


    @Test
    void spacedId() {
        JobService jobs = new JobService(2);
        assertFalse(jobs.idOk("a b"));
    }

}
