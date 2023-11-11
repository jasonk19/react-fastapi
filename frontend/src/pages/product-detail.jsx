import { Skeleton, Stack, Text } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${id}`);
        setProduct(response.data)
      } catch (error) {
        alert(error.message)
      } finally {
        setLoading(false)
      }
    }
    getProduct()
  }, [id])

  return (
    <>
      <Stack p={4}>
        {loading || !product ? (
          <>
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
          </>
        ) : (
          <>
            <Text>id: {id}</Text>
            <Text>Name: {product.name}</Text>
            <Text>Description: {product.description}</Text>
          </>
        )}
      </Stack>
    </>
  )
}

export default ProductDetail