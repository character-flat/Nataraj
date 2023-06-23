import {Box, Hide} from '@chakra-ui/react';
import {Link} from '@chakra-ui/react';
import DarkModeButton from './darkmode';

export default function NavElem( {handler}){
    return(
        <> 
        <Element name = "Home"  src="/"/>
        <Element  name = "About Us" src="/about"/>
        <Element  name = "Achievements" src="/achievements" />
        <Element  name = "Gallery" src="/gallery" />
        <Element  name = "Roadmap" src="/roadmap" />
        <Element  name = "Notes" src="/notes" />
        <Element  name = "Contact Us" src="/contact" />
        <div style={{display:"none"}}>
        <DarkModeButton handler={handler}/>
        </div>
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