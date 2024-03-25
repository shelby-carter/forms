# Use the official Node.js 19-alpine image as a parent image
FROM node:19-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install Node.js dependencies (specified in package.json)
RUN npm install

# Bundle app's source code inside the Docker image
COPY . .

# Instruct the container to listen on port 3000 at runtime
EXPOSE 3000

# Define the command to run the app
CMD [ "node", "index.js" ]
