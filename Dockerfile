# Use the official Node.js image.
FROM node:14

# Set the working directory.
WORKDIR /usr/src/app

# Copy package.json and install dependencies.
COPY package.json ./
RUN npm install

# Copy the rest of the application files.
COPY . .

# Expose the application port.
EXPOSE 4000

# Start the application.
CMD ["node", "server.js"]
