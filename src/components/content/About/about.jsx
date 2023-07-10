import { Text, Image, Container, Flex, Stack } from "@chakra-ui/react";

import img from "./images/lord-nataraj.jpeg";
import img2 from "../../../assets/images/inst.jpg";

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
        <Flex
          direction="row"
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="center"
        >
          <Text fontSize="2xl" textAlign="left" mt="5vh" flex={1}>
            Nataraja Music and Dance Institution, started by Vidhushi Smt.
            Shubada Deshpande in Vidyagiri, Bagalkote in the 2000s is now a well
            known institute in the city. Started the institute with few
            interested students, in a pretty roof top room and now its grown up
            into a huge wonderful institute producing and nurturing talented
            music buds. The tradition and etiquette of Guru-Shishya Parampara
            brings in a unique discipline in all the students' lives.
            <br />
            <Text fontSize="2xl" textAlign="left" mt="5vh" fontWeight={"bold"}>
              COME JOIN US TO EXPERIENCE THIS MAGIC OF MUSIC AND DANCE.
            </Text>
          </Text>
          <Image src={img} alt="random image" mt="5vh" flex={1} />
        </Flex>

        <Text
          fontSize="6xl"
          textAlign="left"
          mt="5vh"
          flex={1}
          fontFamily={"heading"}
          fontWeight={"bold"}
        >
          Our Instructor
        </Text>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="center"
        >
          <Text
            fontSize="2xl"
            textAlign="left"
            mt="1vh"
            flex={1}
            justifyContent={"flex-start"}
          >
            Vidhushi Smt. Shubada Deshpande, The leading light to the talented
            and aspiring minds.
            <br />
            She started her dance journey in her childhood as passion and was
            proved very good in it. After marriage with the support of her
            families she pursued her musical journey as well and proved herself
            to be a multitasking successful woman. Later she started an institue
            called<b> NATARAJA SANGEETHA HAAGU NRITYA NIKETHANA</b>, by taking
            music and dance classes at home and enjoyed teaching young and
            aspiring minds. Now, its all by her sincere efforts numerous number
            of batches have passed from this institute continuing their musical
            and dance journeys in their life. A great salute to her patience and
            persistence to teach. One should be lucky enough to get such Guru in
            their life.
          </Text>
          <Image
            src={img2}
            alt="random image"
            boxSize="400px"
            borderRadius={"full"}
          />
        </Stack>
      </Container>
      <br />
      <br />
      <br />
    </>
  );
}
