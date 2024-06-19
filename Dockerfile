FROM node:18-alpine

WORKDIR /app

COPY package.json
RUN npm install

COPY . .

RUN npm run dev

EXPOSE 3000

CMD ["npm", "start"]