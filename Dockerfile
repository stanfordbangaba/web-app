# Stage 0:
FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


# Stage 1:
FROM nginx:latest
COPY --from=build /app/dist/web-app  /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
