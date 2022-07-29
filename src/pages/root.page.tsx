import React, { useEffect, useRef, useState } from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';
import { Box } from '@chakra-ui/react';

import { NavBar } from '../components/nav-bar/nav-bar.component';
import { NavItem, NavItemHref } from '../components/nav-bar/nav-link.component';

import { HeroPage } from './hero.page';
import { AboutPage } from './about.page';

const inViewObserverOptions: IntersectionOptions = {
  threshold: 0.3
};

const scrollIntoViewOptions: ScrollIntoViewOptions = {
  block: 'start',
  behavior: 'smooth'
};

export const RootPage: React.FC = () => {
  const navBarRef = useRef<any>(null);

  const { ref: heroInViewRef, inView: isHeroInView, entry: heroElement } = useInView(inViewObserverOptions);
  const { ref: aboutInViewRef, inView: isAboutInView, entry: aboutElement } = useInView(inViewObserverOptions);

  const [activeMenu, setActiveMenu] = useState<NavItemHref>('home');

  const navItems: NavItem[] = [
    { href: 'home', label: 'Início', onClick: () => heroElement?.target?.scrollIntoView(scrollIntoViewOptions) },
    { href: 'about', label: 'Sobre', onClick: () => aboutElement?.target?.scrollIntoView(scrollIntoViewOptions) },
    { href: 'projects', label: 'Projetos' },
    { href: 'contact', label: 'Contato' }
  ];

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
      <NavBar elmentRef={navBarRef} navItems={navItems} activeMenu={activeMenu} />

      <HeroPage inViewRef={heroInViewRef} inView={isHeroInView} topOffset={navBarRef.current?.offsetHeight || 65} />

      <AboutPage elementRef={aboutInViewRef} inView={isAboutInView} />
    </Box>
  );
};
