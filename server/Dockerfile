FROM node

RUN npm install -g bun 
RUN echo "Bun version: $(bun --version)"
WORKDIR /app
COPY . .
RUN bun install
EXPOSE 3000
CMD [ "bun","dev" ]