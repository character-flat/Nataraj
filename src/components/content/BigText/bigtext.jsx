import "./bigtext.css";
import React from "react";
import Image from "./image/image";
import Text from "./text/textHead";
import { Flex } from "@chakra-ui/react";
export default function BigText() {
  return (
    <>
      <Flex direction="row" flex="1">
        <Text />
        <Image />
      </Flex>
    </>
  );
}
