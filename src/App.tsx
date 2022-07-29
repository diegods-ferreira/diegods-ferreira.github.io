import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './global/styles/theme';

import { RootPage } from './pages/root.page';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <RootPage />
    </ChakraProvider>
  );
};

export default App;
