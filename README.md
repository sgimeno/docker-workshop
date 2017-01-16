docker workshop
===============

#### Notes

Stop all services
```
$ docker stop $(docker ps -q)
```

Build an image based on a `Dockerfile`
```
$ docker build -t <my-image> .
```

List images
```
$ docker images
```

Run an image
```
$ docker run -p 3000:3000 my-image
```

List all containers
```
$ docker ps -a
```

Stop a container
```
$ docker stop <container ID| container NAME>
```

Get stats

```
$ docker stats
```

Get logs

```
$ docker logs -t -f <container ID | container NAME>
```

+ -t: timestamps
+ -f: real-time

Exec
```
$ docker exec <container ID | container NAME> COMMAND
```

Attach a terminal
```
$ docker exec -it <container ID | container NAME> /bin/bash
```
+ -i: interactive
+ -t: prompt
