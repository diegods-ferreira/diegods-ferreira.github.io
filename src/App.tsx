import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from './styles/theme';

import { HomePage } from './pages/home/home.page';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      retry: 3
    }
  }
});

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
