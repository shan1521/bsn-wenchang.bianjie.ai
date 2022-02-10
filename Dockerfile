FROM node:14.4.0-alpine3.12 AS builder
WORKDIR /app
COPY . .
RUN apk add git && yarn install && yarn run build-params umengId,umengWebId && yarn build

FROM nginx:1.19-alpine
COPY --from=builder /app/docs/.vuepress/dist/ /usr/share/nginx/html/
