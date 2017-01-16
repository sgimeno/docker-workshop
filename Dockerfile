FROM node:6

ADD . /code
WORKDIR /code

RUN npm install
EXPOSE 3000

CMD node index.js
