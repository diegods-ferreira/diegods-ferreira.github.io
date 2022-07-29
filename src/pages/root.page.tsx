import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { VStack } from '@chakra-ui/react';

import { NavBar } from '../components/nav-bar/nav-bar.component';
import { NavItemHref } from '../components/nav-bar/nav-link.component';

import { HeroPage } from './hero.page';
import { AboutPage } from './about.page';

export const RootPage: React.FC = () => {
  const navBarRef = useRef<any>(null);

  const { ref: homeRef, inView: isHomeInView } = useInView();

  const [activeMenu, setActiveMenu] = useState<NavItemHref>('home');

  useEffect(() => {
    if (isHomeInView) {
      setActiveMenu('home');
    }
  }, [isHomeInView]);

  return (
    <VStack ref={homeRef} spacing="0">
      <NavBar elmentRef={navBarRef} activeMenu={activeMenu} />

      <HeroPage topOffset={navBarRef.current?.offsetHeight || 65} />

      <AboutPage />
    </VStack>
  );
};