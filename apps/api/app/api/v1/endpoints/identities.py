from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_identities():
    return {'status': 'ok'}
