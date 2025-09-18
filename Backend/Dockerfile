# Use Node.js LTS version
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching layers)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy environment file
COPY .env .env

# Copy the rest of your backend code
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
