FROM node
RUN npm install -g bun 
WORKDIR /app
COPY package*.json .
RUN bun install
COPY . .
EXPOSE 8080
CMD [ "bun", "dev" ]


