import { Img } from "@chakra-ui/react"
import img from "../../../../assets/images/lord-nataraj.jpeg"

export default function Image() {
    return(
        <>
        <Img src = {img} roundedBottomStart={"2xl"} roundedBottomEnd={"2xl"}   
       
        className="image" style={{
            maxWidth: "100vw",
            maxHeight: "10%",
            objectFit: "fill",
            
            width: "100%",
            WebkitMaskImage:
            "radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%)",
          maskImage:
            "radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.9) 100%) !important",
          }}
        />
        </>
    );
}