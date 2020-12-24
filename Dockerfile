FROM node:13.11

WORKDIR /app
COPY package.json .
RUN npm install
EXPOSE 3000
COPY . .
CMD npm start