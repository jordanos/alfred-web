FROM node:18.0.0 AS builder

WORKDIR /app

# Installing dependencies
COPY ./package.json /app
RUN npm install --omit=dev

COPY . .

RUN npm run build

FROM nginx:stable

COPY nginx-default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html
