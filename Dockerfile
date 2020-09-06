# Builder
FROM node:alpine AS builder

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build


# Runtime
FROM nginx as runtime
#ENV PORT=8080
COPY --from=builder /app/build /usr/share/nginx/html
CMD sed -i -e 's/80/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
