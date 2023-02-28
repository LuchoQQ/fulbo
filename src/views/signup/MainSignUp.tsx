import React from "react";
import ChakraNextImage from "@/components/ChakraNextImage";
import MobileContainer from "@/components/MobileContainer";
import SVGIcon from "@/components/SVGIcon";
import { Button, Flex, Text } from "@chakra-ui/react";
const MainSignUp: React.FC = () => {
    return (
        <>
            <MobileContainer>
                <Flex flexDir="column">
                    <Flex w="360px" h="40%" bg="" flexDir="column"></Flex>
                    <Flex
                        w="360px"
                        h="60%"
                        alignItems="center"
                        flexDir="column"
                        bg="#fff"
                        pt="2rem"
                    >
                        <SVGIcon />
                        <Text fontSize="3xl" fontWeight="bold" mt=".5rem">
                            FUTBOL
                        </Text>
                        <Flex
                            mt="auto"
                            mb="2rem"
                            flexDir="column"
                            w="100%"
                            gap="1rem"
                            p="1rem"
                        >
                            <Button size="lg" bg="#202020" color="#f1f2f3">
                                Ingresar
                            </Button>
                            <Button
                                size="lg"
                                bg="#fff"
                                border="1px solid #202020"
                            >
                                Registrarse
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </MobileContainer>
        </>
    );
};

export default MainSignUp;
