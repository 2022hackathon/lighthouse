from fastapi import Depends, FastAPI, Query

origins=["*"]

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def root():
    return {"message": "root"}

@app.post("/login", response_model=Token)
@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    '''
    /login and /token are the same endpoint
    username == email for our purposes (OAuth spec requires it be called username)

    Pass tokens in the Authorization header as: \'Authorization: Bearer {access_token}\'
    '''
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise credentials_exception("Incorrect email or password")

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    # from JWT spec "sub" is the subject of the token
    access_token = create_access_token(
        data={"sub": user.id}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/signup/consumer", response_model=CreateSuccess)
async def signup_consumer(res = Depends(create_consumer)):
    """
    photo is base64 encoded
    """
    return (res)