
from fastapi import Depends 
from jose import jwt, JWTError
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer
from datetime import datetime, timedelta
from typing import Optional
from contextlib import contextmanager

from exceptions import *
from db_init import *
from db_spec import *
# generated using openssl rand -hex 32 (don't change)
SECRET_KEY = "3dd7787242e5758064d13b19337fefac19f56a937f941768e7ed29eccdeb34f4"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
optional_oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)


class TokenInDB(BaseModel):
    token: str
    createdAt: datetime.datetime = None
    email: Optional[EmailStr] = None

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)


def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def invalidate_token(token: str = Depends(oauth2_scheme)):
    t = TokenInDB(token=token)
    with contextmanager(connect_db)() as db:
        if db.is_token_invalid(token):
            raise credentials_exception("Already logged out")
        db.add_token(t)
    return ({"success": "logged out"})

def check_token(token: str):
    with contextmanager(connect_db)() as db:
        if db.is_token_invalid(token):
            raise credentials_exception("Invalid token")
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        id: str = payload.get("sub")
        if not exists(id):
            raise credentials_exception()
    except JWTError:
        raise credentials_exception()
    
    with contextmanager(connect_db)() as db:
        user = db.get_user_by_id(id)
    if not exists(user):
        raise credentials_exception()

    return user

async def validate_token(token: str = Depends(oauth2_scheme)):
    return check_token(token)
