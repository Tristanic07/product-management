import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={{ base: 22, sm: 28 }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
          bgClip={"text"}
        >
          Current Product 🚀
        </Text>
        <SimpleGrid column={3} gap={2}>

        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default HomePage