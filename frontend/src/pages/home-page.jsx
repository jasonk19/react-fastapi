import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  Skeleton,
  Stack,
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import AddProductModal from '../components/add-product-modal';
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_BASE_URL;

function HomePage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [openAddProductModal, setOpenAddProductModal] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)

  const getProducts = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${API_URL}/products`);
      setProducts(response.data)
    } catch(error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const addProduct = async (v) => {
    const payload = {
      name: v.name,
      description: v.description
    }

    setSubmitLoading(true)

    try {
      await axios.post(`${API_URL}/products`, payload)
      setOpenAddProductModal(false)
      getProducts()
    } catch (error) {
      alert(error.message)
    } finally {
      setSubmitLoading(false)
    }
  }

  return (
    <>
      <Box p={5}>
      <Button mb={3} onClick={() => setOpenAddProductModal(true)}>Add Product</Button>
      {loading ? (
        <Stack>
          <Skeleton h="50px" />
          <Skeleton h="50px" />
          <Skeleton h="50px" />
        </Stack>
      ) : (
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.id}</Td>
                  <Td>{product.name}</Td>
                  <Td>{product.description}</Td>
                  <Td>
                    <Link to={`/${product.id}`}>
                      <Button>View</Button>
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
      </Box>
      <AddProductModal 
        isOpen={openAddProductModal}
        onClose={() => setOpenAddProductModal(false)}
        addProduct={addProduct}
        loading={submitLoading}
      />
    </>
  )
}

export default HomePage
