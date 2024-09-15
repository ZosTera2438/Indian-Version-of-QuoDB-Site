from deep_translator import GoogleTranslator

class Translate_Service:
    def __init__(self):
        pass

    def translate(self, text, target="en", source="auto"):
        return GoogleTranslator(source=source, target=target).translate(text)

translate_service = Translate_Service()