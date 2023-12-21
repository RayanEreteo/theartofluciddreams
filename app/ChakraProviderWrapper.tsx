"use client"

import { ChakraProvider } from "@chakra-ui/react"

function ChakraProviderWrapper({ children }: any) {

  const theme = {
    backgroundColor: "#7FC6B8"
  }

  return (
    <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
  )
}

export default ChakraProviderWrapper