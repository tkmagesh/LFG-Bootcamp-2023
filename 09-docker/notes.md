# Docker #

- container technology

## Commands ##
- docker pull <image_name>
    - pull the image from docker hub

- docker images
    - list the available images on the host machine 

- docker run <image_name>
    - create a container instance of the image

- docker ps -alq
    - [-a] to show all the containers, stopped or running
    - [-l] show the latest container
    - [-q] shows only the ID of the container

- docker stop <container_id>
    - stops a running container

- docker start <container_id>
    - starts a stopped container

- docker restart <container_id>

- docker attach <container_id>
    - attaches to a running container

- docker rm <container_id>
    - removes a container

- docker build -t <image_name:tag> .
    - create a new image

    


