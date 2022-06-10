FROM node:16

WORKDIR /project1

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]