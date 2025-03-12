FROM node:22

WORKDIR /api

COPY package*.json ./

# This runs during container BUILDING (and can be chached)
RUN npm install

COPY . .

ENV PORT=3000
ENV MONGO_URL=mongodb://mongodb-database:27017
# ENV HOST=mongodb-database

EXPOSE 3000

# This runs everytime the container STARTS
CMD ["npm", "start"]

# UPDATE NODE TO @@ FIRST!!!
# BEFORE: docker network create -d bridge mongo-network
# DATABASE: docker run -d --name mongodb-database --network mongo-network mongo
# APP: docker build -t my-api .
# APP: docker run -p 3000:3000 --name mongodb-app --network mongo-network my-api