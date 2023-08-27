FROM node:18-alpine

COPY . .
WORKDIR ./tb-frontend
RUN npm install
RUN npm run build

WORKDIR ../tb-server
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]