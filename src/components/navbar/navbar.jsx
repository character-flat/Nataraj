import { DarkMode, Flex } from "@chakra-ui/react";
import NavElem from "./navelem/navelem";
import { color } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";

export default function NavBar() {
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <Flex 
    bg="gray.800" 
    p={2} 
    opacity={0.5}
    maxW={"100vw"}
    maxH={"15vh"}
    minH={"10vh"}
    fontSize={"calc(0.5em + 1vw)"}
    //onHover={()=>{opacity:1; cursor:"pointer"; transition:"opacity 0.5s ease"; color:"white" }}
    onMouseEnter={(e) => (e.target.style.opacity = 1)}
    onMouseLeave={(e) => (e.target.style.opacity = 0.5)}
    
    >
      <NavElem />
    </Flex>
  );
}
