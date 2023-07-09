import { Text, Image, Container } from "@chakra-ui/react";
import Map from "../features/map";

export default function Contact() {
     return (
         <>
            <Text
        bgGradient="linear(to-l, orange, red)"
        bgClip="text"
        fontSize="7xl"
        fontWeight="extrabold"
        fontStyle={"sans-serif"}
        fontFamily={"heading"}
        textAlign="Center"
        textShadow={"1.5px 1.5px orange"}
        mt="10vh"
      >Please Feel Free To Contact Us </Text>
         
            <Map />
         </>
     );
 }