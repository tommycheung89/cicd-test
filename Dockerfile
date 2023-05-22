FROM --platform=linux/x86-64 node:18.14-alpine AS deps

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . /app

EXPOSE 8000

CMD ["npm","run","start:dev"]