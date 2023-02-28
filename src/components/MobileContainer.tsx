import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
    children?: JSX.Element
}

const MobileContainer: React.FC<Props> = (props) => {
    console.log(props)
    return (
        <>
            <Flex
                w="100vw"
                h="100vh"
                bg="#000"
                alignItems="center"
                justifyContent="center"
            >
                <Flex
                    w="100vw"
                    h="100vh"
                    maxW="360px"
                    maxH="640px"
                    bg="#1f1545"
                >
                    {props.children}
                </Flex>
            </Flex>
        </>
    );
};

export default MobileContainer;
