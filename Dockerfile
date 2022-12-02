# FROM node:18.0.0 


# WORKDIR /app

# COPY package.json package.json
# COPY package-lock.json package-lock.json

# RUN npm install

# COPY . .

# RUN npm run build

# CMD ["npm", "start"]



# FROM node:current-alpine
# WORKDIR /app

# COPY package*.json ./
# RUN yarn install

# COPY . .
# CMD ["yarn","start"]


# FROM node
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# EXPOSE 300
# CMD ["npm","start"]

FROM node:12-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app
RUN npm run build
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 140
CMD ["nginx", "-g", "daemon off;"]