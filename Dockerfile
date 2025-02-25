FROM node:22

WORKDIR /api

COPY package*.json ../

# This runs during container BUILDING (and can be chached)
RUN npm install

COPY . .

ENV PORT=3000
ENV MONGO_URL=mongodb://mongo-db-school:27017
ENV HOST=mongo-db-school

EXPOSE 3000

# This runs everytime the container STARTS
CMD ["npm", "start"]

# UPDATE NODE TO @@ FIRST!!!
# DATABASE: docker run -d --name mongo-db-school --network mongo-network mongo
# APP: docker run -p 3000:3000 --network mongo-network my-api