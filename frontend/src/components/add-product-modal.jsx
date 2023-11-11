import {
  Modal,
  ModalOverlay,
  ModalContent,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack
} from "@chakra-ui/react"
import { useState } from "react"

const AddProductModal = ({isOpen, onClose, addProduct, loading}) => {
  const [data, setData] = useState({
    name: '',
    description: ''
  })

  const handleChange = (e, key) => {
    setData({
      ...data,
      [key]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addProduct(data)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent p={3}>
        <Stack>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input onChange={(e) => handleChange(e, 'name')} />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea resize="none" onChange={(e) => handleChange(e, 'description')} />
          </FormControl>
          <Button onClick={handleSubmit} isLoading={loading}>Submit</Button>
        </Stack>
      </ModalContent>
    </Modal>
  )
}

export default AddProductModal