from datetime import datetime, timedelta
from jose import jwt
from passlib.context import CryptContext
from models import *
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy import create_engine
from fastapi.middleware.cors import CORSMiddleware
import bcrypt
from typing import Union
from fastapi import Depends, HTTPException, FastAPI
from fastapi.security import OAuth2PasswordBearer
from models import Account
from passlib.hash import bcrypt

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")
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
def create_access_token(data: Union[dict, User], expires_delta: int = None):
    if isinstance(data, User):
        data = data.dict()
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
    if user and verify_password(password, user.password):
        return user
    return None
# Função para converter a senha em texto simples para o formato bcryp

def verify_password(plain_password, hashed_password):
    return plain_password == hashed_password


def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        user = db.query(Account).filter(Account.username == username).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user
    except jwt.JWTError:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")