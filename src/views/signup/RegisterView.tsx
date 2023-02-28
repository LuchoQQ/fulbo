import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const RegisterPage: React.FC = () => {
    return (
        <>
                    <Flex
                        h="85%"
                        w="100%"
                        bg="#f1f2f3"
                        alignSelf="flex-end"
                        borderTopRadius="50px"
                        flexDir="column"
                    >
                        <Flex w="100%" h="10%" bg="#fff" borderTopRadius="50px">
                            <Text
                                textAlign="center"
                                w="100%"
                                fontWeight="bold"
                                alignSelf="center"
                            >
                                Creá una cuenta
                            </Text>
                        </Flex>
                        <Flex>
                            <Flex
                                w="100%"
                                h="100%"
                                maxH="450px"
                                mt="1rem"
                                ml="1rem"
                                mr="1rem"
                                p="2rem"
                                bg="#fff"
                                flexDir="column"
                                rounded="20px"
                                gap="2rem"
                            >
                                <Input
                                    variant="flushed"
                                    placeholder="Username"
                                />
                                <Input variant="flushed" placeholder="Email" />
                                <Input variant="flushed" placeholder="Age" />

                                <Input
                                    variant="flushed"
                                    placeholder="Password"
                                />
                                <Input
                                    variant="flushed"
                                    placeholder="Repeat Password"
                                />
                                <Button bg="#1f1545" color="#fff">
                                    Continuar
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
        </>
    );
};

export default RegisterPage;
