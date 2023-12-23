import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Heading,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";

import Link from "next/link";
import { StaticImageData } from "next/image";

interface cardLinkInterface {
  Thumbnail: StaticImageData;
  Title: String;
  Desc: String;
  RedirectTo: String;
}

function CardLink({ Thumbnail, Title, Desc, RedirectTo }: cardLinkInterface) {
  return (
    <Flex className="card-link" textAlign={"center"}>
      <Link href={RedirectTo}>
        <Card maxW="300px" minH={"420px"}>
          <CardBody>
            <Image
              src={Thumbnail.src}
              alt="methodThumbnail"
              borderRadius="lg"
              
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{Title}</Heading>
              <Text>
                {Desc}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </Flex>
  );
}

export default CardLink;
