FROM node:latest

RUN mkdir /app
COPY . .

WORKDIR /app

CMD [ "yarn", "start" ]