import {
  Box,
  Heading,
  HStack,
  IconButton,
  Button,
  CloseButton,
  Image,
  Text,
  Dialog,
  Portal,
  VStack,
  Input,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useColorModeValue } from "./ui/color-mode";
import { userProductStore } from "../store/product";
import { Toaster, toaster } from "../components/ui/toaster";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const buttonTextColor = useColorModeValue("gray.600", "white");
  const bgColor = useColorModeValue("gray.100", "#1A2230");
  const [open, setOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const { deleteProduct, updateProduct } = userProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);

    if (!success) {
      toaster.error({
        title: "Error",
        description: message,
        status: "error",
        duration: 2000,
        action: {
          label: "x",
        },
      });
    } else {
      toaster.success({
        title: "Success",
        description: message,
        status: "success",
        duration: 2000,
        action: {
          label: "✓",
        },
      });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);

    if (!success) {
      toaster.error({
        title: "Error",
        description: message,
        status: "error",
        duration: 2000,
        action: {
          label: "x",
        },
      });
    } else {
      toaster.success({
        title: "Success",
        description: message,
        status: "success",
        duration: 2000,
        action: {
          label: "✓",
        },
      });

      setOpen(!open);
    }
  };

  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      bg={bgColor}
      _hover={{ transform: "translate(0, -5px)", shadow: "xl" }}
    >
      <Toaster />
      <Image
        src={product.image}
        alt={product.name}
        h={"48"}
        w={"full"}
        objectFit={"cover"}
      />
      <Box p={4}>
        <Heading fontWeight="bold" size="xl" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="lg" mb={4} color={buttonTextColor}>
          ₱{product.price}
        </Text>
        <HStack gap={2}>
          <IconButton colorPalette={"blue"} onClick={() => setOpen(!open)}>
            <FaEdit />
          </IconButton>
          <IconButton
            colorPalette={"red"}
            onClick={() => handleDeleteProduct(product._id)}
          >
            <MdDeleteForever />
          </IconButton>
        </HStack>
      </Box>
      <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content bg={bgColor}>
              <Dialog.Header>
                <Dialog.Title>Update Product</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <VStack spacing={4}>
                  <Input
                    placeholder="Product Name"
                    name="name"
                    borderColor="gray.300"
                    value={updatedProduct.name}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        name: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Price"
                    name="price"
                    borderColor="gray.300"
                    value={updatedProduct.price}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        price: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Image URL"
                    name="image"
                    borderColor="gray.300"
                    value={updatedProduct.image}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        image: e.target.value,
                      })
                    }
                  />
                </VStack>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button
                  colorPalette={"cyan"}
                  onClick={() =>
                    handleUpdateProduct(product._id, updatedProduct)
                  }
                >
                  Update
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  );
};

export default ProductCard;
