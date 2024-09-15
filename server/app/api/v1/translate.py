from fastapi import APIRouter, Query, Body, status
from app.core.controllers.translate_controller import TranslateController
from app.core.models.translate_model import Translate

translate_router = APIRouter()
translate_controller = TranslateController()


@translate_router.post("/translate-auto", tags=["Translate"])
async def translate(
    query: str = Query(..., description="Translate a quote to English")
):
    try:
        query = await translate_controller.translate(query)
    except Exception as e:
        print(e)
    return


@translate_router.post("/translate-spec", tags=["Translate"])
async def translate_spec(translate: Translate = Body(...)):
    try:
        reponse = await translate_controller.translate_spec(translate)
    except Exception as e:
        print(e)
    return reponse
