import React, { useEffect, useRef, useState } from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';
import { Box } from '@chakra-ui/react';

import { HeroSection } from './sections/hero.section';
import { AboutSection } from './sections/about.section';
import { ProjectsSection } from './sections/projects.section';
import { ContactSection } from './sections/contact.section';

import { NavBar } from '../../components/nav-bar/nav-bar.component';
import { NavItem, NavItemHref } from '../../components/nav-bar/nav-link.component';
import { ScrollToTopButton } from '../../components/root/scroll-to-top-button.component';

const inViewObserverOptions: IntersectionOptions = {
  threshold: 0.3
};

const scrollIntoViewOptions: ScrollIntoViewOptions = {
  block: 'start',
  behavior: 'smooth'
};

export const HomePage: React.FC = () => {
  const navBarRef = useRef<any>(null);

  const { ref: heroInViewRef, inView: isHeroInView, entry: heroElement } = useInView(inViewObserverOptions);
  const { ref: aboutInViewRef, inView: isAboutInView, entry: aboutElement } = useInView(inViewObserverOptions);
  const { ref: projectsInViewRef, inView: isProjectsInView, entry: projectsElement } = useInView(inViewObserverOptions);
  const { ref: contactInViewRef, inView: isContactInView, entry: contactElement } = useInView(inViewObserverOptions);

  const [activeMenu, setActiveMenu] = useState<NavItemHref>('home');

  const navItems: NavItem[] = [
    { href: 'home', label: 'Início', onClick: () => heroElement?.target?.scrollIntoView(scrollIntoViewOptions) },
    { href: 'about', label: 'Sobre', onClick: () => aboutElement?.target?.scrollIntoView(scrollIntoViewOptions) },
    {
      href: 'projects',
      label: 'Projetos',
      onClick: () => projectsElement?.target?.scrollIntoView(scrollIntoViewOptions)
    },
    { href: 'contact', label: 'Contato', onClick: () => contactElement?.target?.scrollIntoView(scrollIntoViewOptions) }
  ];

  useEffect(() => {
    if (isHeroInView) {
      setActiveMenu('home');
    }

    if (isAboutInView) {
      setActiveMenu('about');
    }
    if (isProjectsInView) {
      setActiveMenu('projects');
    }

    if (isContactInView) {
      setActiveMenu('contact');
    }
  }, [isHeroInView, isAboutInView, isProjectsInView, isContactInView]);

  return (
    <Box pos="relative">
      <NavBar elmentRef={navBarRef} navItems={navItems} activeMenu={activeMenu} />

      <HeroSection inViewRef={heroInViewRef} inView={isHeroInView} topOffset={navBarRef.current?.offsetHeight || 65} />

      <AboutSection elementRef={aboutInViewRef} inView={isAboutInView} />

      <ProjectsSection elementRef={projectsInViewRef} inView={isProjectsInView} />

      <ContactSection elementRef={contactInViewRef} inView={isContactInView} />

      <ScrollToTopButton isVisible={isAboutInView || isProjectsInView || isContactInView} />
    </Box>
  );
};
