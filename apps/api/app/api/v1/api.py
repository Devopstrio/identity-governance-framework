from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, identities, roles, access, approvals, certifications, risk, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(identities.router, prefix="/identities", tags=["identities"])
api_router.include_router(roles.router, prefix="/roles", tags=["roles"])
api_router.include_router(access.router, prefix="/access", tags=["access"])
api_router.include_router(approvals.router, prefix="/approvals", tags=["approvals"])
api_router.include_router(certifications.router, prefix="/certifications", tags=["certifications"])
api_router.include_router(risk.router, prefix="/risk", tags=["risk"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
