from uuid import UUID
from sqlalchemy.orm import Session
from ..models import product as models
from . import schemas

class ProductRepo:
  def __init__(self, db: Session):
    self.db = db

  def find_all(self):
    return self.db.query(models.Product).all()

  def find_by_id(self, id: UUID):
    return self.db.query(models.Product).filter(models.Product.id == id).first()

  def create(self, product: schemas.ProductCreate):
    db_product = models.Product(
      name=product.name,
      description=product.description
    )
    self.db.add(db_product)
    self.db.commit()
    self.db.refresh(db_product)
    return db_product