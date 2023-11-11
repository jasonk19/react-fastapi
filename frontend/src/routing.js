import HomePage from "./pages/home-page"
import ProductDetail from "./pages/product-detail"

const routing = [
  {
    path: '/',
    element: HomePage
  },
  {
    path: '/:id',
    element: ProductDetail
  },
]

export default routing