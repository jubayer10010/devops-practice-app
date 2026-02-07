# 1. Use Node.js as the base
FROM node:18-alpine

# 2. Create the app directory inside the container
WORKDIR /usr/src/app

# 3. Copy dependency files first (for better caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of your server code
COPY . .

# 6. Your server usually runs on port 5000 or 3000
EXPOSE 5000

# 7. Start the server
CMD ["node", "index.js"]
