import { useEffect} from "react";
import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { userProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {

  const {fetchProducts, products} = userProductStore(); 

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log(products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack gap={8}>
        <Text
          fontSize={{ base: 21, sm: 27 }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
          bgClip={"text"}
        >
          Current Product 🚀
        </Text>
        { products ?
          (
            <SimpleGrid 
            columns={[1, 2, 3]}
            gap={10}
            w={'full'}
            >
              {products.map((product) => (
                <ProductCard key={product._id} product={product}/>
              ))}
            </SimpleGrid>
          ) :
          (
            <Text
              fontSize="xl"
              fontWeight={"bold"}
              color="gray.500"
              textAlign={"center"}
            >
              No products found 😔 :{" "}

              <Link to={"/create"}>
                <Text as={"span"} color="blue.500" _hover={{textDecoration: "underline"}}>
                  Create a product
                </Text>
              </Link>
            </Text>
          )
        }
      </VStack>
    </Container>
  )
}

export default HomePage