import Card from "./card/card";
import Map from "./map";
import { SimpleGrid, Heading } from "@chakra-ui/react";
export default function Features() {
    return (
        <>
        <Heading
        textAlign="left"
        border={1}
        borderRadius={10}
        p={5}
        m={5}
        ml={10}
        > tfyvgubhnij</Heading>
        <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="40px"
        padding="40px"
        
        
        >

            <Card title="test" children="hkwbjchw"/>
            <Card title="test" children="hkwbjchw"/>
            <Card title="test" children="hkwbjchw"/>
        </SimpleGrid>
        <Heading
        textAlign="left"
        border={1}
        borderRadius={10}
        p={5}
        m={5}
        ml={10}
        > Map</Heading>
        <Map/>
        </>
    )
}
