FROM node:alpine

WORKDIR /src/app

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
