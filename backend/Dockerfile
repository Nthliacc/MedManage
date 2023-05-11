# Dockerfile para o backend

# Use a imagem base apropriada para o aplicativo Python
FROM python:3.9

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo requirements.txt para o diretório de trabalho
COPY requirements.txt .

# Instala as dependências do projeto
RUN pip install --no-cache-dir -r requirements.txt

# Copia todo o conteúdo da pasta backend para o diretório de trabalho do contêiner
COPY . .

# Expõe a porta em que o servidor web estará rodando
EXPOSE 8000

# Define o comando a ser executado quando o contêiner for iniciado
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
