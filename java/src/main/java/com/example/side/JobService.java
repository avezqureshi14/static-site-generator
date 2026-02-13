package com.example.side;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

public class JobService {
    private final ConcurrentHashMap<String, String> jobs = new ConcurrentHashMap<>();
    private final int limit;

    public JobService(int limit) {
        this.limit = limit < 1 ? 1 : limit;
    }

    public boolean submit(String id, String name) {
        if (id == null || id.isBlank() || name == null || name.isBlank()) {
            return false;
        }
        if (jobs.size() >= limit) {
            return false;
        }
        return jobs.putIfAbsent(id, name) == null;
    }

    public Optional<String> find(String id) {
        return Optional.ofNullable(jobs.get(id));
    }

    public List<String> ids() {
        return new ArrayList<>(jobs.keySet());
    }

    public boolean nameOk(String name) {
        return name != null && !name.isBlank() && name.length() <= 80;
    }


    public boolean idOk(String id) {
        return id != null && !id.isBlank() && id.length() <= 64 && !id.contains(" ");
    }


    public static int normalizeLimit(int limit) {
        return limit < 1 ? 1 : limit;
    }


    public boolean missing(String id) {
        return find(id).isEmpty();
    }


    public int size() {
        return jobs.size();
    }


    public void clear() {
        jobs.clear();
    }


    public String trimName(String name) {
        return name == null ? "" : name.trim();
    }

}
