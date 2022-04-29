From node:17.9.0
WORKDIR /app
COPY . .
RUN npm install -g pnpm
EXPOSE 9000
CMD ["node"]
