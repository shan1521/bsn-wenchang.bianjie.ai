FROM node:14.4.0-alpine3.12 AS builder
WORKDIR /app
COPY . .
ARG APKPROXY=http://mirrors.ustc.edu.cn/alpine
RUN sed -i "s+http://dl-cdn.alpinelinux.org/alpine+${APKPROXY}+g" /etc/apk/repositories && \
    apk add git && yarn install --registry http://registry.npmmirror.com  && \
    yarn run build-params umengId,umengWebId && yarn build

FROM nginx:1.19-alpine
COPY --from=builder /app/docs/.vuepress/dist/ /usr/share/nginx/html/
RUN echo -e 'server {\n\
  location / {\n\
    root /usr/share/nginx/html;\n\
    if ($request_filename ~* index.html|.*\.ico$)\n\
    {\n\
        add_header Cache-Control "no-cache";\n\
    }\n\
  }\n\
}' > /etc/nginx/conf.d/default.conf
