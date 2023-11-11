from typing import Union
from uuid import UUID
from pydantic import BaseModel

class ProductBase(BaseModel):
  name: str
  description: Union[str, None] = None

class ProductCreate(ProductBase):
  pass

class Product(ProductBase):
  id: UUID

  class Config:
    orm_mode = True