from datetime import datetime
from enum import Enum
from typing import Optional, List, Union
from bson import ObjectId
from pydantic import BaseModel, EmailStr, Field


class UserInDB(BaseModel):
    email: str
    hashed_password: str
    id: Optional[str] = Field(alias="_id", default=None)

class Token(BaseModel):
    access_token: str

class TokenInDB(BaseModel):
    token: str
    createdAt: datetime = None
    email: Optional[EmailStr] = None

class CreateUser(BaseModel):
    email: EmailStr
    password: str

class UpdatePassword(BaseModel):
    old_psw: str
    new_psw1: str
    new_psw2: str

class CreateSuccess(BaseModel):
    id: str