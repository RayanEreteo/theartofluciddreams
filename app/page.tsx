import { Button, Flex, Box, Heading, Text } from "@chakra-ui/react";
import CardLink from "./components/CardLink";


export default function Home() {
  return (
    <Flex
      className="Main"
      backgroundColor={"#7FC6B8"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      m={"auto"}
      w={"100vw"}
      h={"100vh"}
    >
      <Heading fontSize={"4rem"} color={"white"} textAlign={"center"}>
        L'art des rêves lucides
      </Heading>
      <Text fontSize={"1.3rem"} opacity={"0.8"} color={"white"}>
        Blog développé par{" "}
        <Text as={"span"} textDecoration={"underline"}>
          Rayan Ereteo
        </Text>
      </Text>
      <Box className="luciddream-desc" color={"white"} mt={"10rem"} textAlign={"center"}>
        <Heading>Un rêve lucide, c'est quoi ?</Heading>
        <br />
        <Text maxW={"800px"} fontSize={"1.2rem"}>
          Un rêve lucide est un type particulier de rêve où le rêveur devient
          conscient qu'il est en train de rêver. Dans un rêve lucide, la
          personne prend conscience de son état de rêve tout en restant
          endormie. Cela signifie qu'elle réalise qu'elle vit une expérience
          onirique et peut parfois exercer un certain degré de contrôle sur son
          propre rêve.
        </Text>
      </Box>
      <Flex className="category-wrapper" flexDirection={"row"}></Flex>
    </Flex>
  );
}
