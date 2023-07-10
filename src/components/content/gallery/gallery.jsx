import { Text, Image, Container } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import img1 from "./photos/1.jpg";
import img2 from "./photos/2.jpg";
import img3 from "./photos/3.jpg";
import img4 from "./photos/4.jpg";
import img5 from "./photos/5.jpg";
import img6 from "./photos/6.jpg";
import img7 from "./photos/7.jpg";
var imgArray = [img1, img2, img3, img4, img5, img6, img7];

function GalleryCard(props) {
  return (
    <Card maxW="s" margin={3}>
      <CardBody>
        <Image src={props.imgs} borderRadius="lg" />
      </CardBody>
    </Card>
  );
}

export default function Gallery() {
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
        GALLERY
      </Text>
      <Container maxW="container.lg" centerContent mt="10vh" flex={1}>
        <GalleryCard imgs={imgArray[0]} />
        <GalleryCard imgs={imgArray[1]} />
        <GalleryCard imgs={imgArray[2]} />
        <GalleryCard imgs={imgArray[3]} />
        <GalleryCard imgs={imgArray[4]} />
        <GalleryCard imgs={imgArray[5]} />
        <GalleryCard imgs={imgArray[6]} />
      </Container>
    </>
  );
}
