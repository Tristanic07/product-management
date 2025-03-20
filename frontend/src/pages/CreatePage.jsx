import { Container, VStack, Heading, Box, Input, Button } from "@chakra-ui/react"
import { useState } from "react"
import { useColorModeValue } from "../components/ui/color-mode"

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  })

  const handleAddProduct = () => {
    console.log(newProduct);
  } 

  return (
    <Container maxW={"40rem"}>
      <VStack
        spacing={8}
      >
        <Heading as={"h1"} size={'2xl'} textAlign={'center'} mb={8}>Create New Product</Heading>

        <Box 
          w={"full"}
          bg={useColorModeValue("white", "#1B2536")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              borderColor="gray.300"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input
              placeholder="Price"
              name="price"
              borderColor="gray.300"
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input
              placeholder="Image URL"
              name="image"
              borderColor="gray.300"
              value={newProduct.image}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />

            <Button colorPalette="blue" onClick={handleAddProduct}>Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage