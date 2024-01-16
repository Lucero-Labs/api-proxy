# syntax=docker/dockerfile:1
FROM node:16 as modena-resolver
RUN mkdir modena-resolver
WORKDIR /modena-resolver
COPY . .

RUN npm install -g @nestjs/cli
RUN npm install
RUN nest build
CMD ["nest" , "start"]
EXPOSE 8080
