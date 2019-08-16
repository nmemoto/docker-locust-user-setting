# docker-locust-user-setting

docker command for oparating locust user setting with web interface

## build

```
$ git clone
$ cd docker-locust-user-setting
$ docker build -t locust-user-setting .
```

## run

Execution Example

```
$ docker run --rm --net=host locust-user-setting http://localhost:8089 3 1
```

arg1: locust web interface url (ex. http://localhost:8089)
arg2: user number (ex. 3)
arg3: hatch rate (ex. 1)

```
$ docker run --rm [--net=host] locust-user-setting  [arg1] [arg2] [arg3]
```

If arg1 is http://localhost, you should include `[--net=host]` option
