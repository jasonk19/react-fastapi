from sqlalchemy import UUID, Column, String
import uuid
from ..database import Base

class Product(Base):
  __tablename__ = "products"

  id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
  name = Column(String, nullable=False)
  description = Column(String)