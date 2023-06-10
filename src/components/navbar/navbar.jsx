import { Flex } from "@chakra-ui/react";
import NavElem from "./navelem/navelem";
export default function NavBar({ setCurrentPage}) {
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <Flex 
    bg="gray.500" 
    p={2} 
    opacity={0.8}
    maxW={"100vw"}
    maxH={"15vh"}
    >
      <NavElem handler={handlePageClick}/>
    </Flex>
  );
}
