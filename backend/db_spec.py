import datetime
from enum import Enum
from typing import Optional, List, Union
from bson import ObjectId
from pydantic import BaseModel, EmailStr, Field


class TokenInDB(BaseModel):
    token: str
    createdAt: datetime.datetime = None
    email: Optional[EmailStr] = None

class CreateUser(BaseModel):
    email: EmailStr
    password: str

class UpdatePassword(BaseModel):
    old_psw: str
    new_psw1: str
    new_psw2: str