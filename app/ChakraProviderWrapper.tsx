"use client"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

function ChakraProviderWrapper({ children }: any) {

  return (
    <ChakraProvider>
        {children}
    </ChakraProvider>
  )
}

export default ChakraProviderWrapper