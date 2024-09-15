from fastapi import APIRouter

# from .analyse import analyse_router

from .quote import quote_router
from .translate import translate_router

v1_router = APIRouter()
v1_router.include_router(quote_router, prefix="/quote", tags=["Quote"])
v1_router.include_router(translate_router, prefix="/translate", tags=["Translate"])
