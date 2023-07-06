FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]

# FROM node:16-alpine

# WORKDIR /src

# COPY package.json package-lock.json ./

# RUN npm install

# COPY next.config.js ./next.config.js

# COPY public ./public
# COPY src ./src

# EXPOSE 3000

# CMD ["npm", "run", "dev"]