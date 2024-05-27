FROM node:22.2-alpine

WORKDIR /usr/src/app
COPY . .
RUN ls -al && npm install

ENTRYPOINT [ "npm", "start" ]
