FROM node

RUN npm install -g bun 
WORKDIR /app
COPY . .
RUN echo "Bun version: $(bun --version)"
RUN bun install
EXPOSE 3000
CMD [ "bun","dev" ]