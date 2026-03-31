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


    @Test
    void normalName() {
        assertTrue(new JobService(2).nameOk("parse resume"));
    }


    @Test
    void sizeGrows() {
        JobService jobs = new JobService(4);
        jobs.submit("a", "one");
        jobs.submit("b", "two");
        assertEquals(2, jobs.size());
    }


    @Test
    void clearDropsRows() {
        JobService jobs = new JobService(4);
        jobs.submit("a", "one");
        jobs.clear();
        assertEquals(0, jobs.size());
    }


    @Test
    void missingId() {
        assertTrue(new JobService(2).missing("nope"));
    }


    @Test
    void idsContainStored() {
        JobService jobs = new JobService(4);
        jobs.submit("a", "one");
        assertTrue(jobs.ids().contains("a"));
    }


    @Test
    void longName() {
        assertFalse(new JobService(1).nameOk("n".repeat(81)));
    }

}
