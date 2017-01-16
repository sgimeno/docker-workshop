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
 + -d: dettached mode, will return a container ID

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
+ -f: follow, real-time

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

#### docker-compose

To build the images for defined services
```
$ docker-compose build
```
Run based on a `docker-compose.yml` file
```
$ docker-compose up
```
 + -d: dettached mode

Stop the services running

```
$ docker-compose stop
```

See the services running at the moment

```
$ docker-compose ps
```
Get logs

```
$ docker-compose logs -t -f <container ID | container NAME>
```

+ -t: timestamps
+ -f: follow, real-time

Stop & remove containers

```
$ docker-compose rm <container ID | container NAME>
```
