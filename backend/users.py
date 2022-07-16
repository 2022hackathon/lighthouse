from fastapi import Depends, Path

from db_init import *
from db_spec import *
from security import *

def create_user(user: CreateUser, db: DBSession = Depends(connect_db)) -> str:
    # check if the email and phone already exist 
    if db.find_one(Collections.users, {"email": user.email}):
        raise bad_request_exception("User already exists")

    hashed_password = get_password_hash(user.password)
    new_user = UserInDB(**user.dict(), hashed_password=hashed_password)

    id = db.insert_user(new_user.dict())
    return CreateSuccess(id=str(id))

def delete_user(user = Depends(validate_token), db: DBSession = Depends(connect_db), token: str = Depends(oauth2_scheme)) -> None:
    db.remove_user(user)
    invalidate_token(token)

def update_password(update: UpdatePassword, user = Depends(validate_token), db: DBSession = Depends(connect_db)):
    if update.new_psw1 != update.new_psw2:
            raise bad_request_exception("Passwords don't match")
    
    if not verify_password(update.old_psw, user.hashed_password):
            raise bad_request_exception("Incorrect password")
    
    db.update_password(update.new_psw1, user.id)