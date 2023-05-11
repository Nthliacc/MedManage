from datetime import datetime
from typing import Optional
from sqlalchemy.sql import func
from pydantic import BaseModel
from sqlalchemy import Column, Float, Integer, String, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
from sqlalchemy.orm import Session

Base = declarative_base()

class Medication(Base):
    __tablename__ = "medication"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    price = Column(Float(precision=2), nullable=False)
    expiration_date = Column(DateTime, nullable=False)
    image = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    created_by = Column(String, nullable=False)
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    updated_by = Column(String)
    
    def __repr__(self):
        return f"Medication(name={self.name}, price={self.price}, expiration_date={self.expiration_date}, image={self.image})"
    
    __table_args__ = {"extend_existing": True}


class MedicationCreate(BaseModel):
    name: str
    price: float
    expiration_date: datetime
    image: Optional[str]
    created_by: str
    

class MedicationUpdate(BaseModel):
    name: Optional[str]
    price: Optional[float]
    expiration_date: Optional[datetime]
    image: Optional[str]
    updated_by: Optional[str]
    updated_at: Optional[datetime] = datetime.utcnow()

class Account(Base):
    __tablename__ = "account"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    is_admin = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    last_login = Column(DateTime(timezone=True))

class AccountCreate(BaseModel):
    username: str
    password: str
    email: str
    is_admin: bool = False

def get_all_accounts(db: Session):
    accounts = db.query(Account).all()
    return accounts
class AccountBase(BaseModel):
    username: str
    password: str
    email: str
    is_admin: Optional[bool] = False

class AccountCreate(AccountBase):
    pass

class AccountUpdate(AccountBase):
    password: Optional[str] = None
    email: Optional[str] = None
    is_admin: Optional[bool] = None