import { Text, Image, Container, Card, CardBody } from "@chakra-ui/react";
import img1 from "./photos/1.jpg";
import img2 from "./photos/2.jpg";
import img3 from "./photos/3.jpg";
import img4 from "./photos/4.jpg";
import img5 from "./photos/5.jpg";
import img6 from "./photos/6.jpg";
import img7 from "./photos/7.jpg";
import img8 from "./photos/8.jpg";
var imgArray = [img1, img2, img3, img4, img5, img6, img7, img8];

function ACard(props) {
    return (
        <Card maxW="s" margin={3}>
          <CardBody>
            <Image src={props.imgs} borderRadius="lg" />
          </CardBody>
        </Card>
    );
}
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
      >OUR ACHIEVEMENTS</Text>
            <Container maxW="container.lg" centerContent mt="10vh" flex={3} >
               <ACard imgs={imgArray[0]} />
                <ACard imgs={imgArray[1]} />
                <ACard imgs={imgArray[2]} />
                <ACard imgs={imgArray[3]} />
                <ACard imgs={imgArray[4]} />
                <ACard imgs={imgArray[5]} />
                <ACard imgs={imgArray[6]} />
                <ACard imgs={imgArray[7]} />
            </Container>
         </>
     );
 }