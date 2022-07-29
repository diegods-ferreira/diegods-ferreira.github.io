import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { VStack } from '@chakra-ui/react';

import { NavBar } from '../components/nav-bar/nav-bar.component';
import { NavItemHref } from '../components/nav-bar/nav-link.component';

import { HeroPage } from './hero.page';
import { AboutPage } from './about.page';

export const RootPage: React.FC = () => {
  const navBarRef = useRef<any>(null);

  const { ref: heroRef, inView: isHeroInView } = useInView({ rootMargin: '-200px' });
  const { ref: aboutRef, inView: isAboutInView } = useInView({ rootMargin: '-200px' });

  const [activeMenu, setActiveMenu] = useState<NavItemHref>('home');

  useEffect(() => {
    if (isHeroInView) {
      setActiveMenu('home');
    }

    if (isAboutInView) {
      setActiveMenu('about');
    }
  }, [isHeroInView, isAboutInView]);

  return (
    <VStack spacing="0">
      <NavBar elmentRef={navBarRef} activeMenu={activeMenu} />

      <HeroPage elementRef={heroRef} inView={isHeroInView} topOffset={navBarRef.current?.offsetHeight || 65} />

      <AboutPage elementRef={aboutRef} inView={isAboutInView} />
    </VStack>
  );
};
