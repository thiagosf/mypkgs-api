#!/bin/bash

# -----------------------
# The amazing docker tool
# -----------------------

# doc
if [ "$1" == 'doc' ]
  then
    docker-compose up doc

# start
elif [ "$1" == 'start' ]
  then
    if [ "$2" == 'logs' ]
      then
        docker-compose up --no-recreate --no-build web
    else
        docker-compose up --no-recreate --no-build -d web
    fi;

# add lib
elif [ "$1" == 'add' ]
  then
    docker-compose run web yarn add $2

# remove lib
elif [ "$1" == 'remove' ]
  then
    docker-compose run web yarn remove $2

# rebuild
elif [ "$1" == 'rebuild' ]
  then
    if [ "$2" == 'logs' ]
      then
        docker-compose up --build web
    else
        docker-compose up --build -d web
    fi;

# logs
elif [ "$1" == 'logs' ]
  then
    docker-compose logs -f

# test
elif [ "$1" == 'test' ]
  then
    docker-compose exec web npm test

# shell
elif [ "$1" == 'shell' ]
  then
    docker-compose exec web /bin/bash

# stop
elif [ "$1" == 'stop' ]
  then
    docker-compose down

# invalid
else
  echo "invalid command"
fi;
