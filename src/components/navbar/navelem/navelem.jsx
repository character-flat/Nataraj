import {Box} from '@chakra-ui/react';
import {Link} from '@chakra-ui/react';
import DarkModeButton from './darkmode';
export default function NavElem( {handler}){
    return(
        <> 
        <Element name = "Home" handler={handler()}/>
        <Element  name = "About Us" handler={handler()}/>
        <Element  name = "Achievements" handler={handler()}/>
        <Element  name = "Roadmap" handler={handler()}/>
        <Element  name = "Notes" handler={handler()}/>
        <Element  name = "Contact Us" handler={handler()}/>
        
        </>
    )
}

function Element(props){
    return(
        <Box p={3}
        maxW={"16.66vw"}
        fontSize={"calc(0.5em + 1vw)"}
        //onClick={() => props.handler(props.name)}
        >
        <Link href={props.src}>{props.name}</Link>
      </Box>
    )
}