##### syntax=docker/dockerfile:1.5-labs

FROM ubuntu

# RUN - the commands to execute when the IMAGE is created
RUN apt-get update

# WORKDIR - set the working directory for all the RUN, CMD, COPY operations that follows
WORKDIR /usr/magesh

COPY ./notes.md .

# ADD https://github.com/tkmagesh/lfg-bootcamp-2023.git .
# VOLUME [ "/data" ]

# CMD - the commands to execute when the CONTAINER is created
CMD [ "echo", "Hello World!" ]