# concurrency-service

Two programs in one repo. They do not import each other.

- `go/` is an HTTP worker with a bounded queue, timeouts, and a shutdown path.
- `java/` is a separate Spring Boot API with its own pom. It can run beside the Go process.

Nothing here shares a classpath or a go.mod with the other half.

The Go worker listens on :8081. POST /v1/jobs with {"id","name"}. A full queue returns 503.

The Java API is a normal Spring Boot process. Give it server.port=8082 if both should run together.
