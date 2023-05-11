from datetime import datetime, timedelta
from jose import jwt
from passlib.context import CryptContext
from models import Account
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy import create_engine
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import bcrypt

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)

engine = create_engine('postgresql://postgres:000666@db/medication_database')
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, expire_on_commit=False)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

SECRET_KEY = "2c1375b5e96a3a9cb9d0d180f7b98dd92c75"  # Substitua pelo seu segredo
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Função para gerar um token de acesso
def create_access_token(data: dict, expires_delta: int = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + timedelta(minutes=expires_delta)
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Função para autenticar o usuário
def authenticate_user(username: str, password: str, db: Session):
    user = db.query(Account).filter(Account.username == username).first()
    return user

# Função para verificar a senha
def verify_password(plain_password, hashed_password):
    try:
        return bcrypt.checkpw(plain_password.encode("utf-8"), hashed_password.encode("utf-8"))
    except ValueError:
        return False

# Função para converter a senha em texto simples para o formato bcrypt
def convert_password(plain_password):
    salt = bcrypt.gensalt().decode("utf-8")
    hashed_password = bcrypt.hashpw(plain_password.encode("utf-8"), salt.encode("utf-8"))
    return hashed_password


# Função para converter todas as senhas do banco de dados
def convert_all_passwords(db):
    # Obtenha todos os registros de usuário do banco de dados
    users = db.query(Account).all()

    # Percorra cada usuário e atualize a senha
    for user in users:
        user.password = convert_password(user.password)

    # Commit as alterações no banco de dados
    db.commit()