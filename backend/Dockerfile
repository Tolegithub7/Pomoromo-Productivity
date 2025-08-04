# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Expose NestJS default port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start:dev"]
