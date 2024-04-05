FROM node:current-alpine
EXPOSE 8081
WORKDIR /shopping_cart
COPY . .
RUN npm install
CMD ["npm", "start"]
