package com.example.side;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import java.util.Map;

@RestController
public class JobController {
    private final JobService jobs = new JobService(100);

    public record JobRequest(String id, String name) {}

    @PostMapping("/v1/jobs")
    public ResponseEntity<Void> submit(@RequestBody JobRequest req) {
        if (!jobs.submit(req.id(), req.name())) {
            return ResponseEntity.status(503).build();
        }
        return ResponseEntity.accepted().build();
    }

    @GetMapping("/v1/jobs/{id}")
    public ResponseEntity<Map<String, String>> get(@PathVariable String id) {
        return jobs.find(id)
                .map(name -> ResponseEntity.ok(Map.of("id", id, "name", name)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
