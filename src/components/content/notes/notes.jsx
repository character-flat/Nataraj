import { Text, Image, Container } from "@chakra-ui/react";
import { AspectRatio } from '@chakra-ui/react'
export default function Notes() {
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
      >NOTES</Text>
            
            <AspectRatio ratio={16 / 9}>
  <iframe
    src="https://drive.google.com/embeddedfolderview?id=1oleRbNH8tlSrl-DwPmGAONO42kA-iE6J#grid"
  />
</AspectRatio>
              
         </>
     );
 }