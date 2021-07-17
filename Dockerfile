# Common build stage
FROM node:14

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 1234

CMD ["npm", "start"]