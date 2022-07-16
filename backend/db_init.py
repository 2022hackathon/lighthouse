from pymongo import MongoClient, ASCENDING, DESCENDING
from enum import Enum
from bson import ObjectId
from exceptions import bad_request_exception
import datetime as dt

class Collections(str, Enum):
    users = "users"

def validate_id(id: str):
    if not ObjectId.is_valid(id):
        raise bad_request_exception("Invalid Id")

def exists(x):
    return x is not None

class DBSession():
    def __init__(self):
        CONNECTION_STRING = "mongodb+srv://user:uuuuuu@cluster0.flp6hrp.mongodb.net/?retryWrites=true&w=majority"
        self.client = MongoClient(CONNECTION_STRING)
        self.db = self.client.car_rental_service

    def close_connection(self):
        self.client.close()

    # Common queries
    def get_user(self, email: str):
        user = self.db.users.find_one({"email": email})
        if exists(user):
            return self.user_to_class(user)

    def get_user_by_id(self, u_id: str):
        validate_id(u_id)
        user = self.db.users.find_one({"_id": ObjectId(u_id)})
        if exists(user):
            return self.user_to_class(user)

    def insert_user(self, user_dict: dict):
        del user_dict['id']
        res = self.db.users.insert_one(user_dict)
        return str(res.inserted_id)

    def add_token(self, token):
        token.createdAt = dt.datetime.now(dt.timezone.utc)
        self.db.tokens.insert_one(token.dict(exclude_none=True))

    def is_token_invalid(self, token: str):
        t = self.find_one(Collections.tokens, {"token": token})
        return exists(t)
            


##
def connect_db() -> DBSession:
    db = DBSession()
    try:
        yield db
    finally:
        db.close_connection()
