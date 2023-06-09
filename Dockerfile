FROM node:20.1-alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 8889
CMD ["node","index.js"]