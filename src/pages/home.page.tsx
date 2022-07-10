import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heading, Text, VStack } from '@chakra-ui/react';

import { NavBar } from '../components/nav-bar/nav-bar.component';
import { NavItemHref } from '../components/nav-bar/nav-link.component';

export const HomePage: React.FC = () => {
  const { ref: homeRef, inView: isHomeInView } = useInView();

  const [activeMenu, setActiveMenu] = useState<NavItemHref>('home');

  useEffect(() => {
    if (isHomeInView) {
      setActiveMenu('home');
    }
  }, [isHomeInView]);

  return (
    <VStack ref={homeRef} h="100vh">
      <NavBar activeMenu={activeMenu} />

      <Heading>Montserrat</Heading>
      <Text>Varela Round</Text>
    </VStack>
  );
};
