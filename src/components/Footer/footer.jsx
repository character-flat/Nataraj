import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="gray.100" p={4} mt="auto">
      <Text textAlign="center" fontSize="sm" color={"black"}>
        © 2023 My Company. All rights reserved.
      </Text>
    </Box>
  );
}