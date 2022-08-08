import React from 'react';
import { Box, Center, Link, SlideFade } from '@chakra-ui/react';

export type NavItemHref = 'home' | 'about' | 'projects' | 'contact';

export interface NavItem {
  href: NavItemHref;
  label: string;
  onClick: () => void;
}

interface NavLinkProps {
  link: NavItem;
  isActive: boolean;
  inView?: boolean;
  delay: number;
}

export const NavLink: React.FC<NavLinkProps> = ({ link, isActive, inView = false, delay }) => {
  return (
    <SlideFade in={inView} offsetX="100%" offsetY={0} transition={{ enter: { duration: 0.5, delay } }}>
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
            md: 'linear(to-r, transparent, transparent)'
          }}
          _groupHover={{
            textDecor: 'none',
            color: 'textSecondary.500'
          }}
          onClick={link.onClick}
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
    </SlideFade>
  );
};
