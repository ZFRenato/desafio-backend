FROM node:alpine

WORKDIR /src/app

COPY . .

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]
