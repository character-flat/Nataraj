import "./textHead.css"
import  {Heading, Text} from "@chakra-ui/react";
var height = "+40vh";
if(document.body.clientWidth < 1200){
    height = "+0vh";
}
export default function TextHead() {
    return(
        <>
       <Heading as="h1" size="4xl" className="textHead" >
         <Text 
         position={"absolute"} 
         alignContent={"center"} 
         alignItems={"center"} 
         justifyContent={"center"} 
         //transform="translate(0vw, {height} )"
         textShadow="5px 5px black, -5px -5px black, 5px -5px black, -5px 5px black"
         color={"whiteAlpha"}
            style={{
                fontSize: "10vw",
                maxWidth: "100%",
                maxHeight: "10%",
                objectFit: "fill",  
                padding: "5vw",
                width: "100%",

              }}
          >
            NATARAJA INSTITUTION OF DANCE AND MUSIC
        </Text>
        </Heading>
        </>
    )
}

