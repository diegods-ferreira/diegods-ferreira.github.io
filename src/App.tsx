import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <h1>Hello World!</h1>
    </ChakraProvider>
  )
};

export default App
