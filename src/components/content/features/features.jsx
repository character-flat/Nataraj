import Card from "./card/card";
import { Text } from "@chakra-ui/react";
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
        > Talents We Nurture</Heading>
        <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="40px"
        padding="40px"
        
        
        >

            <Card title="Hindusthani Music" children="Hindustani classical music is
the classical music of
northern regions of the
Indian subcontinent. It may
also be called North Indian
classical music or, in
Hindustani, shastriya
sangeet. The term shastriya sangeeta literally means
classical music, and can also
mean Indian classical
music in general."/>
            <Card title="Bharatanatyam" children="Bharatanatyam is a dance
of Tamil Nadu in southern
India. It traces its origins
back to the Natyashastra,
an ancient treatise on
theatre written by the
mythic priest Bharata.
Originally a temple dance
for women, bharatanatyam
often is used to express Hindu religious
stories and devotions."/>
            <Card title="Kathak" children="Kathak is characterized by
intricate footwork and
precise rhythmic patterns
that the dancer articulates
by controlling about 100
ankle bells. It takes its
movements from life,
stylizes them, and adds the
complex rhythmic patterns.
Kathak is danced bv both males and females"/>
        </SimpleGrid>
        <Heading
        textAlign="left"
        border={1}
        borderRadius={10}
        p={5}
        m={5}
        ml={10}
        > Any Questions?  Ping Us at <a href="mailto:natarajainstitute@gmail.com">natarajainstitute@gmail.com</a></Heading>
      
        </>

    )
}
