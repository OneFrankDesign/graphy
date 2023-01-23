FROM node:18-alpine AS development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN apk update && apk add --no-cache git

RUN rm -rf node_modules && npm ci --only=development

COPY --chown=node:node . .

RUN npm run build

USER node

FROM node:18-alpine AS production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN apk update && apk add --no-cache git

RUN rm -rf node_modules && npm ci --only=production

COPY --chown=node:node . .

COPY --chown=node:node --from=development /usr/src/app/dist ./dist

USER node

CMD [ "npm", "run", "start:prod" ]