from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .models import product as product_model
from .database import engine
from .products import router as products

product_model.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*"]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_methods=["*"],
  allow_headers=["*"]
)

app.include_router(products.router)

@app.get('/')
def check_status():
  return {
    "status": "Healthy"
  }