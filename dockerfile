FROM node:18 AS ui-build
WORKDIR /app
COPY . ./
RUN npm install && npm run build

FROM node:18 AS server-build
WORKDIR /root/
COPY --from=ui-build /app/dist ./dist
COPY --from=ui-build /app/node_modules ./node_modules
COPY --from=ui-build /app/server.js /app/package*.json ./

EXPOSE 3000

CMD ["npm", "run", "serve"]