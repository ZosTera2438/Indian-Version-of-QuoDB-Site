from pydantic import BaseModel
from typing import Optional  


class Quote(BaseModel):
    quote_id: str
    quote: str
