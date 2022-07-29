import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Box, Flex, IconButton, Stack, Collapse, Icon, useDisclosure, Avatar } from '@chakra-ui/react';

import { NavItem, NavItemHref, NavLink } from './nav-link.component';

interface NavBarProps {
  activeMenu: NavItemHref;
  // eslint-disable-next-line react/no-unused-prop-types
  elmentRef?: any;
}

const NAV_LINKS: NavItem[] = [
  { href: 'home', label: 'Início' },
  { href: 'about', label: 'Sobre' },
  { href: 'projects', label: 'Projetos' },
  { href: 'contact', label: 'Contato' }
];

const DesktopNav: React.FC<NavBarProps> = ({ activeMenu }) => {
  return (
    <Stack direction="row" spacing={4}>
      {NAV_LINKS.map((link) => (
        <NavLink key={link.href} link={link} isActive={activeMenu === link.href} />
      ))}
    </Stack>
  );
};

const MobileNav: React.FC<NavBarProps> = ({ activeMenu }) => {
  return (
    <Stack bg="white" borderTop="1px" borderStyle="solid" borderColor="gray.200" p="16px" display={{ md: 'none' }}>
      {NAV_LINKS.map((link) => (
        <NavLink key={link.href} link={link} isActive={activeMenu === link.href} />
      ))}
    </Stack>
  );
};

export const NavBar: React.FC<NavBarProps> = ({ activeMenu, elmentRef }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box ref={elmentRef} w="100%" borderBottom="1px" borderStyle="solid" borderColor="gray.200">
      <Flex
        bg="white"
        color="gray.600"
        maxW="1200px"
        minH="60px"
        mx="auto"
        py={{ base: '8px' }}
        px={{ base: '16px' }}
        align="center"
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={<Icon as={isOpen ? FiX : FiMenu} w={5} h={5} />}
            variant="ghost"
            colorScheme="textSecondary"
            aria-label="Toggle Navigation"
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'flex-end', md: 'start' }}>
          <Avatar
            name="Diego Ferreira"
            bgGradient="linear(to-r, peachRed.500, peachOrange.500)"
            fontFamily="Montserrat"
            fontWeight="bold"
          />

          <Flex flex={{ base: 1 }} display={{ base: 'none', md: 'flex' }} justifyContent="flex-end">
            <DesktopNav activeMenu={activeMenu} />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav activeMenu={activeMenu} />
      </Collapse>
    </Box>
  );
};
