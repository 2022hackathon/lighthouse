from fastapi import HTTPException, status


def credentials_exception(d="Could not validate credentials"):
    return HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail=d,
        headers={"WWW-Authenticate": "Bearer"},
    )

def bad_request_exception(d: str):
    return HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail=d
    )

def forbidden_exception(d: str):
    return HTTPException(
        status_code=status.HTTP_403_FORBIDDEN,
        detail=d
    )

def not_found_exception(d: str):
    return HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=d
    )
