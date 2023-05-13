from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from models import *
from auth import *

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)
SECRET_KEY = "2c1375b5e96a3a9cb9d0d180f7b98dd92c75"

from typing import List

@app.get("/medication")
def get_medications(name: str = None, db: Session = Depends(get_db)):
    if name:
        medications = db.query(Medication).filter(Medication.name == name).all()
        if not medications:
            raise HTTPException(status_code=404, detail="Medication not found")
    else:
        medications = db.query(Medication).all()
    return medications

@app.post("/medication")
def create_medication(medication: MedicationCreate, db: Session = Depends(get_db)):
    db_medication = Medication(**medication.dict())
    db.add(db_medication)
    db.commit()
    db.refresh(db_medication)
    return db_medication

@app.get("/medication/{medication_id}")
def get_medication(medication_id: int, db: Session = Depends(get_db)):
    db_medication = db.query(Medication).filter(Medication.id == medication_id).first()
    if not db_medication:
        raise HTTPException(status_code=404, detail="Medication not found")
    return db_medication

@app.put("/medication/{medication_id}")
def update_medication(medication_id: int, medication: MedicationUpdate, db: Session = Depends(get_db)):
    db_medication = db.query(Medication).filter(Medication.id == medication_id).first()
    if not db_medication:
        raise HTTPException(status_code=404, detail="Medication not found")
    for var, value in vars(medication).items():
        if value is not None:
            setattr(db_medication, var, value)
    db.commit()
    db.refresh(db_medication)
    return db_medication

@app.delete("/medication/{medication_id}")
def delete_medication(medication_id: int, db: Session = Depends(get_db)):
    db_medication = db.query(Medication).filter(Medication.id == medication_id).first()
    if not db_medication:
        raise HTTPException(status_code=404, detail="Medication not found")
    db.delete(db_medication)
    db.commit()
    return {"message": "Medication deleted"}



@app.get("/accounts")
async def get_accounts(db: Session = Depends(get_db)):
    accounts = db.query(Account).all()
    usernames = [account.username for account in accounts]
    return usernames

@app.post("/accounts")
async def create_account(account: AccountCreate, db: Session = Depends(get_db)):
    db_account = Account(**account.dict())
    db.add(db_account)
    db.commit()
    db.refresh(db_account)
    return db_account

@app.put("/accounts/{account_id}")
async def update_account(account_id: int, account: AccountUpdate, db: Session = Depends(get_db)):
    db_account = db.query(Account).filter(Account.id == account_id).first()
    if not db_account:
        raise HTTPException(status_code=404, detail="Account not found")
    update_data = account.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_account, key, value)
    db.commit()
    db.refresh(db_account)
    return db_account

@app.delete("/accounts/{account_id}")
async def delete_account(account_id: int, db: Session = Depends(get_db)):
    db_account = db.query(Account).filter(Account.id == account_id).first()
    if not db_account:
        raise HTTPException(status_code=404, detail="Account not found")
    db.delete(db_account)
    db.commit()
    return {"message": "Account deleted successfully"}

@app.post("/login")
def login(login_data: Login, db: Session = Depends(get_db)):
    user = authenticate_user(login_data.username, login_data.password, db)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    access_token = create_access_token(
        data={"sub": user.username},
        expires_delta=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    return {"access_token": access_token}