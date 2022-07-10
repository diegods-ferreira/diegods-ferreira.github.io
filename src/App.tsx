import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './global/styles/theme';

import { HomePage } from './pages/home.page';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
};

export default App;
