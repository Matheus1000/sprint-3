FROM node:14
WORKDIR /app-node
COPY . .
EXPOSE 3000
RUN npm install && apt-get update && apt-get install nginx -y
ENTRYPOINT npm start


