import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

interface cardLinkInterface {
  Thumbnail: String;
  Title: String;
  RedirectTo: String;
}

function CardLink({ Thumbnail, Title, RedirectTo }: cardLinkInterface) {
  return (
    <Flex textAlign={"center"}>
      <Link href={RedirectTo}>
        <Image src={Thumbnail} width={200} />
        <Text color={"white"}>{Title}</Text>
      </Link>
    </Flex>
  );
}

export default CardLink;
