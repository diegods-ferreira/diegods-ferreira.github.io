import React from 'react'
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'

import { theme } from './global/styles/theme';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Heading>Montserrat</Heading>

      <Text>Varela Round</Text>
    </ChakraProvider>
  )
};

export default App
