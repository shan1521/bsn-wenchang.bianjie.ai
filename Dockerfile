FROM node:14.4.0-alpine3.12 AS builder
WORKDIR /app
COPY . .
RUN apk add make git && npm i && npm run build

FROM nginx:1.19-alpine
COPY --from=builder /app/docs/.vuepress/dist/ /usr/share/nginx/html/