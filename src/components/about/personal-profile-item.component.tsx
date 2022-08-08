import React from 'react';
import { Center, ScaleFade, Text } from '@chakra-ui/react';

interface PersonalProfileItemProps {
  fontSize: string | Record<string, string>;
  fontWeight: string;
  inView?: boolean;
  delay?: number;
  children: React.ReactNode;
}

export const PersonalProfileItem: React.FC<PersonalProfileItemProps> = ({
  fontSize,
  fontWeight,
  inView = false,
  delay = 0,
  children
}) => {
  return (
    <ScaleFade
      in={inView}
      initialScale={0}
      transition={{ enter: { duration: 0.5, delay } }}
      style={{ width: '100%', height: '100%' }}
    >
      <Center boxSize="100%">
        <Text
          fontFamily="Montserrat"
          fontSize={fontSize}
          fontWeight={fontWeight}
          textAlign="center"
          borderRadius="16px"
          cursor="pointer"
          transition="0.2s"
          _hover={{
            transform: 'scale(1.05)',
            textShadow: '0px 15px 5px rgba(0,0,0,0.1), 10px 20px 5px rgba(0,0,0,0.05), -10px 20px 5px rgba(0,0,0,0.05)'
          }}
        >
          {children}
        </Text>
      </Center>
    </ScaleFade>
  );
};
