from pydantic import BaseModel
from typing import Optional


class Translate(BaseModel):
    sentence: str
    source: Optional[str] = "auto"
    target: Optional[str] = "en"
