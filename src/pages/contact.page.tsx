import React from 'react';
import { Center } from '@chakra-ui/react';

interface ContactPageProps {
  elementRef: any;
  inView?: boolean;
}

export const ContactPage: React.FC<ContactPageProps> = ({ elementRef, inView = false }) => {
  return (
    <Center ref={elementRef} w="100%" bg="textSecondary.500" overflowX="hidden">
      <h1 style={{ color: 'white' }}>ContactPage</h1>
    </Center>
  );
};
