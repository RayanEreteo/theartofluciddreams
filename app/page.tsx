import { Button, Flex, Box, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex className='Main' backgroundColor={"#7FC6B8"} flexDirection={"column"} textAlign={'center'} justifyContent={"center"} m={"auto"} w={"100vw"} h={"100vh"}>
      <Heading fontSize={'4rem'} color={"white"}>L'art des rêves lucides</Heading>
    </Flex>
  )
}