import React, { useEffect, useRef, useState } from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';
import { Box } from '@chakra-ui/react';

import { NavBar } from '../components/nav-bar/nav-bar.component';
import { NavItemHref } from '../components/nav-bar/nav-link.component';

import { HeroPage } from './hero.page';
import { AboutPage } from './about.page';

const inViewObserverOptions: IntersectionOptions = {
  threshold: 0.3
};

export const RootPage: React.FC = () => {
  const navBarRef = useRef<any>(null);

  const { ref: heroRef, inView: isHeroInView } = useInView(inViewObserverOptions);
  const { ref: aboutRef, inView: isAboutInView } = useInView(inViewObserverOptions);

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
    <Box pos="relative">
      <NavBar elmentRef={navBarRef} activeMenu={activeMenu} />

      <HeroPage elementRef={heroRef} inView={isHeroInView} topOffset={navBarRef.current?.offsetHeight || 65} />

      <AboutPage elementRef={aboutRef} inView={isAboutInView} />
    </Box>
  );
};
