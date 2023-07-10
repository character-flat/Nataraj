import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Card(props) {
  return (
    <Box
      borderRadius={10}
      bg="gray.400"
      p={5}
      m={5}
      boxShadow="dark-lg"
      color={{ base: "white", md: "black" }}
      textAlign="center"
    >
      <Heading
        textAlign="center"
        border={1}
        borderRadius={10}
        p={2}
        //_dark={{bg: "gray.800",color: "white",}}
        color={{ base: "white", md: "black" }}
      >
        {props.title}
      </Heading>
      <br />
      <Text fontFamily={"serif"}>{props.children}</Text>
    </Box>
  );
}
