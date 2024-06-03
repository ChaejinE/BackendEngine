FROM node:22.2-slim

ARG WOKR_DIR
WORKDIR ${WOKR_DIR}
COPY src .
RUN npm install
RUN npm install nodemon -D
