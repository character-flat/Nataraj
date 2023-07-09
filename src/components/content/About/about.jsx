import { Text, Image, Container, Flex, Stack } from "@chakra-ui/react";

import img from "./images/lord-nataraj.jpeg";
import img2 from "../../../assets/images/inst.jpg"
import "./style.css";
export default function Achievements() {
  return (
    <>
      <Text
        bgGradient="linear(to-l, orange, red)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        fontStyle={"italic"}
        fontFamily={"heading"}
        textAlign="Center"
        textShadow={"1.5px 1.5px orange"}
        mt="10vh"
      >
        ABOUT US
      </Text>
      <Container
        maxW="container.lg"
        centerContent
        mt="10vh"
        flex={3}
        color={"white"}
      >
    <Flex direction="row" flexWrap="wrap" justifyContent="space-around" alignItems="center">
        <Text fontSize="2xl" textAlign="left" mt="5vh" flex={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            tellus in hac habitasse platea dictumst. Tempor commodo ullamcorper
            a lacus vestibulum sed. Leo vel fringilla est ullamcorper. Tortor
            at auctor urna nunc. Lorem ipsum dolor sit amet. Et malesuada fames
            ac turpis egestas. Amet est placerat in egestas erat. Adipiscing
        </Text>
        <Image src={img} alt="random image" mt="5vh" flex={1} />
        </Flex>    
        
       
        <Text fontSize="6xl" textAlign="left" mt="5vh" flex={1} >
          Our Instructor
        </Text>
        <Stack direction="row" flexWrap="wrap" justifyContent="space-around" alignItems="center">
          <Text fontSize="2xl" textAlign="left" mt="1vh" flex={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            </Text>
        <Image src={img2} alt="random image" boxSize='450px' borderRadius={"full"} />
        </Stack>
      </Container>
      <br />
      <br />
      <br />
    </>
  );
}
