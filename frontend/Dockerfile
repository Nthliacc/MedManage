# Define a imagem base
FROM node:16-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código para o diretório de trabalho
COPY . .

# Builda o projeto
RUN npm run build

# Define a porta exposta pelo container
EXPOSE 3000

# Define o comando para iniciar o servidor
CMD ["npm", "start"]
