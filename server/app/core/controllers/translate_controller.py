from app.core.services.translate_service import translate_service


class TranslateController:
    def __init__(self):
        pass

    async def translate(self, query: str):
        translatedQUote = translate_service.translate(query)
        return translatedQUote

    async def translate_spec(self, translate: any):
        response = translate_service.translate(
            translate.sentence, translate.target, translate.source
        )
        return response
