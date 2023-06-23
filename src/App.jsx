import React from 'react'
import Navbar from './components/navbar/navbar';
import { Flex} from '@chakra-ui/react';
import Footer from './components/Footer/footer';
import Content from './components/Content/content';
import {BrowserRouter } from 'react-router-dom';





function App() {
  return (
    
    <Flex direction="column" flex="1">
      <Navbar/>
      <BrowserRouter >
      <Content/>
      </BrowserRouter>
      <Footer />  
    </Flex>
    
    );

    // return (
    //   <Router>
    //     <div>
    //       <nav>
    //         <ul>
    //           <li>
    //             <Link to="/">Home</Link>
    //           </li>
    //           <li>
    //             <Link to="/about">About Us</Link>
    //           </li>
    //         </ul>
    //       </nav>
  
    //       <Route exact path="/" component={Home} />
    //       <Route path="/about" component={About} />
    //     </div>
    //   </Router>
    // );
  
  }
export default App;
