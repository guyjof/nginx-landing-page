FROM node:16

# Create app directory
WORKDIR /usr/src/app
# A wildcard is used to ensure both package. json AND package-lock. json are copied
COPY package*.json ./
# Install app dependencies
RUN npm i

COPY . .
EXPOSE 7777
CMD [ "npm", "run", "start"]
