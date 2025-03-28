import { Box, Heading, HStack, IconButton, Image, Text } from "@chakra-ui/react"
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useColorModeValue } from "./ui/color-mode";


const ProductCard = ({product}) => {
  return (
    <Box
    shadow={'lg'}
    rounded={'lg'}
    overflow={'hidden'}
    transition={'all 0.3s'}
    bg={useColorModeValue("gray.100", "#1A2230")}
    _hover={{transform: "translate(-5px)", shadow: "xl"}}
    >
        <Image src={product.image} alt={product.name} h={'48'} w={'full'} objectFit={'cover'}/>
        <Box p={4}>
            <Heading fontWeight="bold" size='xl' mb={2}> 
                {product.name}
            </Heading>
            <Text fontWeight="bold" fontSize="lg"  mb={4}>
                ₱{product.price}
            </Text>
            <HStack gap={2}>
            
                <IconButton colorPalette={'blue'}>
                    <FaEdit /> 
                </IconButton>
                <IconButton colorPalette={'red'}>
                <MdDeleteForever />
                </IconButton>
            </HStack>
        </Box>
    </Box>
  )
}

export default ProductCard