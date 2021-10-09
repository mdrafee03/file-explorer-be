FROM node:14 as base
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
USER node
CMD ["yarn", "dev"]

FROM base as prod
ENV NODE_PATH=./dist
RUN yarn build
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start"]
