# Stage 1: Build the React app
FROM node:14-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --silent

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Run the React app
FROM node:14-alpine

WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/build /app/build

# Install serve globally to serve the app
RUN npm install -g serve

# Expose port 3000 (or any other port you want to use)
EXPOSE 3000

# Start the app using serve
CMD ["serve", "-s", "build"]
