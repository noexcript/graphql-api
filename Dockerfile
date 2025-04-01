FROM node:18

# Create and set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the TypeScript project
RUN npx tsc

# Expose port and start server
EXPOSE 4000
CMD ["node", "dist/interfaces/server.js"]
