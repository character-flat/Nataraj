<<<<<<< HEAD
import { useColorMode, Button } from "@chakra-ui/react"

export default function DarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  if (colorMode !== 'dark') {
    toggleColorMode()
  }
  return (
    <Button onClick={toggleColorMode} colorScheme="black">
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
=======
import { useColorMode, Button } from "@chakra-ui/react";
import { color } from "framer-motion";

export default function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} color={"darkblue"}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
>>>>>>> ab586371d0e8bb5fa75cea7460e528153975245b
}
