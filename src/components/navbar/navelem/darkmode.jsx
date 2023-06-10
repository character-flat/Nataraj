import { useColorMode, Button } from "@chakra-ui/react"
import { color } from "framer-motion"

export default
function Example() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
    
        <Button onClick={toggleColorMode} color={"darkblue"}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
    )
  }