from uuid import UUID
from sqlalchemy.orm import Session
from . import schemas
from .repositories import ProductRepo

class ProductService:
  def __init__(self, db: Session):
    self.repository = ProductRepo(db)

  def get_products(self):
    return self.repository.find_all()
  
  def get_product(self, id: UUID):
    return self.repository.find_by_id(id)
  
  def create_product(self, product: schemas.ProductCreate):
    return self.repository.create(product=product)