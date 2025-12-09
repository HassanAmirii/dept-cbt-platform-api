#start from a base node image
FROM node:18-alpine

#set up the working dir
WORKDIR /usr/src/app

#copy and install dependencies
COPY package*.json ./
RUN npm install

#copy the rest of the application code 
COPY . .

#Expose the port
EXPOSE 3000

#start the app
CMD ["npm", "start"]


