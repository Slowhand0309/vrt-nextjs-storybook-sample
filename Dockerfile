FROM node:12.22.0-alpine

RUN apk update && \
    apk add git vim