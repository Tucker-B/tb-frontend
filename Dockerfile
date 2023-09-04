FROM node:18-alpine

USER root

COPY . .
WORKDIR ./frontend
RUN npm install
RUN npm run build

WORKDIR ../backend
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]