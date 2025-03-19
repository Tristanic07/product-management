import { Button, Container, Flex, HStack, Text} from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { Link } from "react-router-dom"
import { FaRegPlusSquare } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const buttonBg = useColorModeValue("gray.100", "gray.800");
    const buttonTextColor = useColorModeValue("black", "white");

  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{ base: "column", sm: "row" }}

        >
            <Text
                fontSize={{ base: 22, sm: 28 }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
                bgClip={"text"}
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button bg={buttonBg} color={buttonTextColor}>
                        <FaRegPlusSquare />
                    </Button>
                </Link>

                <Button onClick={toggleColorMode} bg={buttonBg} color={buttonTextColor}>
                {colorMode === "light" ? <LuSun /> : <LuMoon />}
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar