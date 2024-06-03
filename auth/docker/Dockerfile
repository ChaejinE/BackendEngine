FROM node:22.2-alpine

ARG WOKR_DIR
WORKDIR ${WOKR_DIR}
COPY src .
RUN npm install
RUN npm install nodemon -D
