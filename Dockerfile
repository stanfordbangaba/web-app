# Stage 0:
FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


# Stage 1:
FROM nginx:latest
COPY --from=build /app/dist/web-app  /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

