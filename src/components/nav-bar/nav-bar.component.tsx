import React from 'react';
import { Avatar, Center, HStack } from '@chakra-ui/react';

import { NavItem, NavItemHref, NavLink } from './nav-link.component';

interface NavBarProps {
  activeMenu: NavItemHref;
}

const NAV_LINKS: NavItem[] = [
  { href: 'home', label: 'Início' },
  { href: 'about', label: 'Sobre' },
  { href: 'projects', label: 'Projetos' },
  { href: 'contact', label: 'Contato' }
];

export const NavBar: React.FC<NavBarProps> = ({ activeMenu }) => {
  return (
    <Center as="nav" w="100%" h="64px">
      <HStack
        h="100%"
        w="100%"
        maxW="1200px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Avatar
          name="Diego Ferreira"
          bgGradient="linear(to-r, peachRed.500, peachOrange.500)"
          fontFamily="Montserrat"
          fontWeight="bold"
        />

        <HStack h="100%" spacing="40px" alignItems="center">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              link={link}
              isActive={activeMenu === link.href}
            />
          ))}
        </HStack>
      </HStack>
    </Center>
  );
};
