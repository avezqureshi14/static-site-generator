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


    @Test
    void longId() {
        assertFalse(new JobService(1).idOk("i".repeat(65)));
    }


    @Test
    void sameRowAfterSubmit() {
        JobService jobs = new JobService(2);
        jobs.submit("a", "one");
        assertTrue(jobs.sameRow("a"));
        assertFalse(jobs.sameRow("b"));
    }


    @Test
    void capLimitClamps() {
        assertEquals(1000, JobService.capLimit(5000));
    }


    @Test
    void countMatchesSize() {
        JobService jobs = new JobService(3);
        jobs.submit("a", "n");
        assertEquals(jobs.size(), jobs.count());
    }


    @Test
    void blankIsNotPresent() {
        assertFalse(new JobService(1).presentId("  "));
    }


    @Test
    void findTrimmed() {
        JobService jobs = new JobService(2);
        jobs.submit("a", "n");
        assertTrue(jobs.findTrimmed(" a ").isPresent());
    }


    @Test
    void limit_four_stores_four_names() {
        JobService jobs = new JobService(4);
        for (int i = 0; i < 4; i++) {
            assertTrue(jobs.submit("id" + i, "name" + i));
        }
        assertFalse(jobs.submit("overflow", "nope"));
        assertEquals(4, jobs.size());
    }


    @Test
    void limit_six_stores_six_names() {
        JobService jobs = new JobService(6);
        for (int i = 0; i < 6; i++) {
            assertTrue(jobs.submit("id" + i, "name" + i));
        }
        assertFalse(jobs.submit("overflow", "nope"));
        assertEquals(6, jobs.size());
    }


    @Test
    void limit_eight_stores_eight_names() {
        JobService jobs = new JobService(8);
        for (int i = 0; i < 8; i++) {
            assertTrue(jobs.submit("id" + i, "name" + i));
        }
        assertFalse(jobs.submit("overflow", "nope"));
        assertEquals(8, jobs.size());
    }


    @Test
    void limit_ten_stores_ten_names() {
        JobService jobs = new JobService(10);
        for (int i = 0; i < 10; i++) {
            assertTrue(jobs.submit("id" + i, "name" + i));
        }
        assertFalse(jobs.submit("overflow", "nope"));
        assertEquals(10, jobs.size());
    }


    @Test
    void limit_fifteen_stores_fifteen_names() {
        JobService jobs = new JobService(15);
        for (int i = 0; i < 15; i++) {
            assertTrue(jobs.submit("id" + i, "name" + i));
        }
        assertFalse(jobs.submit("overflow", "nope"));
        assertEquals(15, jobs.size());
    }

}
