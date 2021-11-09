FROM node:12.22.0-alpine

RUN apk update && \
    apk add --no-cache \
      git \
      vim \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
