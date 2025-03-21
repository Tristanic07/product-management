import { Container, VStack, Heading, Box, Input, Button} from "@chakra-ui/react"
import { useState } from "react"
import { useColorModeValue } from "../components/ui/color-mode"
import { userProductStore } from "../store/product"
import {Toaster, toaster } from "../components/ui/toaster"

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  })

  const {createProduct}=userProductStore();
  
  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct);
    console.log(success);
    if(!success){
      toaster.error({
        title: "Error",
        description: message,
        status: "error",
        duration: 2000,
        action: {
          label: "x"
        }
      });
    }else{
      toaster.success({
        title: "Success",
        description: message,
        status: "succes",
        duration: 2000,
        action: {
          label: "✓"
        }
      });
    }
    setNewProduct({name: "", price: "", image: ""});
  } 

  return (
    <Container maxW={"40rem"}>
    <Toaster />
      <VStack
        spacing={8}
      >
        <Heading as={"h1"} fontWeight={"bold"} size={'2xl'} textAlign={'center'} mb={8}>Create New Product</Heading>

        <Box 
          w={"full"}
          bg={useColorModeValue("white", "#1A2230")}
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

            <Button colorPalette="cyan" onClick={handleAddProduct}>Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage