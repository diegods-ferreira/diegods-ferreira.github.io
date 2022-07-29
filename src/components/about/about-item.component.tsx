import React from 'react';
import { FiCommand } from 'react-icons/fi';
import { HStack, Icon, SlideFade, Text } from '@chakra-ui/react';

interface AboutItemProps {
  inView?: boolean;
  delay?: number;
  children: React.ReactNode;
}

export const AboutItem: React.FC<AboutItemProps> = ({ inView = false, delay = 0, children }) => {
  return (
    <SlideFade in={inView} offsetX="80px" transition={{ enter: { duration: 0.5, delay } }} whileHover={{ scale: 1.1 }}>
      <HStack
        p="16px"
        borderRadius="16px"
        cursor="pointer"
        spacing="16px"
        role="group"
        transition="0.2s"
        _hover={{
          bg: 'rgba(255, 255, 255, 0.25)',
          boxShadow:
            '-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(174, 174, 192, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF'
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
    </SlideFade>
  );
};
