FROM node:18.0.0 


WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
# FROM node:current-alpine
# WORKDIR /app

# COPY package*.json ./
# RUN yarn install

# COPY . .
# CMD ["yarn","start"]