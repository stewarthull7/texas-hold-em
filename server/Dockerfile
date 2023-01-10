FROM node:10.8.0

RUN mkdir -p /opt/app

RUN apt-get -q update && apt-get -qy install netcat --force-yes
RUN npm i npm@6.2.0 -g

WORKDIR /opt
COPY package.json package-lock.json* ./
RUN npm install && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . /opt/app

RUN npm run test

CMD npm start

EXPOSE 5000
