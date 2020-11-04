FROM node:15.0.1
WORKDIR /var/www
COPY ./app .
RUN yarn build
CMD ["yarn", "start:prod"]
