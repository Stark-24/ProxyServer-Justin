FROM node:8.9.4-onbuild

WORKDIR /usr/src/proxy

ADD . /usr/src/proxy

RUN npm install

EXPOSE 9000

CMD ["npm", "start"]
