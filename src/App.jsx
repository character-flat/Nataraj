import React from 'react'
import Navbar from './components/navbar/navbar';
import Content from './components/content/content';
import { Flex} from '@chakra-ui/react';
import Footer from './components/Footer/footer';
import { useState } from 'react';



function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <Flex direction="column" flex="1">
      <Navbar setCurrentPage={setCurrentPage} />
      <Content currentPage={currentPage} />
      <Footer />  
    </Flex>
  );
  }
export default App;
