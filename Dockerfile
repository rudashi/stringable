FROM node:latest

WORKDIR /var/www/html/app/

COPY package*.json ./

RUN [ "/bin/bash", "-c", "yarn install --pure-lockfile 2> >(grep -v warning 1>&2) && mv node_modules ../"]

ENV PATH /usr/node_modules/.bin:$PATH

RUN npm install -g npm@8.13.0

COPY . .

EXPOSE 3000

#CMD [ "npm", "run", "dev" ]