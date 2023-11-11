from typing import List
from uuid import UUID
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .service import ProductService
from ..database import SessionLocal
from . import schemas

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

router = APIRouter(
  prefix="/products",
  tags=["products"],
)

@router.get("/", response_model=List[schemas.Product])
async def get_products(db: Session = Depends(get_db)):
  return ProductService(db).get_products()

@router.get('/{id}', response_model=schemas.Product)
async def get_product(id: UUID, db: Session = Depends(get_db)):
  return ProductService(db).get_product(id=id)

@router.post('/', response_model=schemas.Product)
async def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
  return ProductService(db).create_product(product=product)