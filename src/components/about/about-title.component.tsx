import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';

interface AboutTitleProps {
  children: React.ReactNode;
}

export const AboutTitle: React.FC<AboutTitleProps> = ({ children }) => {
  return (
    <Heading maxW="360px" w="100%" position="relative" role="group" size={{ base: 'lg', md: 'xl' }}>
      <Text color="textSecondary.500" transition="0.2s" _groupHover={{ color: 'textSecondary.700' }}>
        {children}
      </Text>

      <Box
        w="25%"
        h="8px"
        borderRadius="4px"
        bgGradient="linear(to-r, peachRed.500, peachOrange.500)"
        pos="absolute"
        bottom={{ base: '-16px', md: '-24px' }}
        transition="0.2s"
        _groupHover={{ w: '30%' }}
      />
    </Heading>
  );
};
