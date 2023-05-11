# Dockerfile para o frontend

# Use a imagem base apropriada para o aplicativo React
FROM node:16

#create app directory
RUN mkdir -p /app

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o conteúdo da pasta frontend para o diretório de trabalho do contêiner
COPY . .

# Compila o aplicativo React
RUN next build

# Expõe a porta em que o servidor web estará rodando
EXPOSE 3000

# Define o comando a ser executado quando o contêiner for iniciado
CMD ["npm", "start"]
