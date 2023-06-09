from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from models import *
from auth import *
from dotenv import load_dotenv

load_dotenv()
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

import os

SECRET_KEY = os.getenv("SECRET_KEY") 
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))

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
async def create_medication(medication: MedicationCreate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    user = authenticate_user(current_user.username, current_user.password, db)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # image_data = await medication.image.read();

    db_medication = Medication(
        name=medication.name,
        price=medication.price,
        expiration_date=medication.expiration_date,
        created_by=user.username
    )
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
    accounts = db.query(Account.id, Account.username, Account.email).all()
    return [{"id": account[0], "username": account[1], "email": account[2]} for account in accounts]

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
        data={"username": user.username, "id": user.id, "isAdmin": user.is_admin},
        expires_delta=ACCESS_TOKEN_EXPIRE_MINUTES
    )
    return {"access_token": access_token}