import React from 'react';
import { FiCommand } from 'react-icons/fi';
import { HStack, Icon, Text } from '@chakra-ui/react';

interface AboutItemProps {
  children: React.ReactNode;
}

export const AboutItem: React.FC<AboutItemProps> = ({ children }) => {
  return (
    <HStack
      w="100%"
      p="16px"
      borderRadius="16px"
      cursor="pointer"
      spacing="16px"
      role="group"
      transition="0.2s"
      _hover={{
        bg: 'rgba(255, 255, 255, 0.25)',
        boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff'
      }}
    >
      <Icon as={FiCommand} boxSize="20px" color="textTertiary.500" />

      <Text
        color="textPrimary.300"
        fontSize={{ base: 'md', md: 'lg' }}
        transition="0.2s"
        _groupHover={{ color: 'textPrimary.500' }}
      >
        {children}
      </Text>
    </HStack>
  );
};
