# syntax=docker/dockerfile:1

FROM node:16.0.1-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN set -eux apk add --no-cache yarn

RUN yarn install

RUN yarn run build

EXPOSE 8888  


CMD [ "yarn", "start:dev" ]
