import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface cardLinkInterface {
  Thumbnail: StaticImageData;
  Title: String;
  RedirectTo: String;
}

function CardLink({ Thumbnail, Title, RedirectTo }: cardLinkInterface) {
  return (
    <Flex textAlign={"center"} background={"black"}>
      <Link href={RedirectTo}>
        <Image src={Thumbnail} width={200} alt="method thumbnail"/>
        <Text color={"white"} fontWeight={"bold"}>{Title}</Text>
      </Link>
    </Flex>
  );
}

export default CardLink;
