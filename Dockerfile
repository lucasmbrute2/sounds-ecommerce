FROM node:alpine3.11

RUN apk add --no-cache bash

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]