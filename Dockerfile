FROM node

WORKDIR /src/app

COPY . .

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]
