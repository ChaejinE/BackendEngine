FROM node:22.2-alpine

ARG SOURE_DIR=/usr/src/app
WORKDIR ${SOURE_DIR}
COPY ../ .
RUN ls -al && npm install
RUN npm install nodemon -D

ENTRYPOINT [ "npm", "start" ]
