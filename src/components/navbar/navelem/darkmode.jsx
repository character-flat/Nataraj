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
}
