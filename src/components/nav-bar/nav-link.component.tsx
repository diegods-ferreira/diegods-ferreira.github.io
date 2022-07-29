import React from 'react';
import { Box, Center, Link } from '@chakra-ui/react';

export type NavItemHref = 'home' | 'about' | 'projects' | 'contact';

export interface NavItem {
  href: NavItemHref;
  label: string;
}

interface NavLinkProps {
  link: NavItem;
  isActive: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ link, isActive }) => {
  return (
    <Center h={{ base: '32px', md: '100%' }} pos="relative" role="group" pointerEvents={isActive ? 'none' : 'all'}>
      <Link
        href={`#${link.href}`}
        h="100%"
        borderRadius="full"
        px={{ base: '32px', md: '8px' }}
        fontWeight={isActive ? 'bold' : 'normal'}
        color={isActive ? 'textPrimary.500' : 'textTertiary.500'}
        bgGradient={{
          base: isActive ? 'linear(to-r, peachOrange.500, white)' : 'white',
          md: 'linear(to-r, white, white)'
        }}
        _groupHover={{
          textDecor: 'none',
          color: 'textSecondary.500'
        }}
      >
        <Center w="100%" h="100%">
          {link.label}
        </Center>
      </Link>

      <Box
        display={{ base: 'none', md: 'block' }}
        w={!isActive ? '0%' : '80%'}
        h="4px"
        borderRadius="2px"
        bgGradient="linear(to-r, peachRed.500, peachOrange.500)"
        pos="absolute"
        bottom="8px"
        transition="0.2s"
        _groupHover={{ w: '100%' }}
      />
    </Center>
  );
};
