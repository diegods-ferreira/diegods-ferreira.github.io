import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Box, Flex, IconButton, Stack, Collapse, Icon, useDisclosure, Avatar } from '@chakra-ui/react';

import { NavItem, NavItemHref, NavLink } from './nav-link.component';

interface NavBarProps {
  navItems: NavItem[];
  activeMenu: NavItemHref;
  // eslint-disable-next-line react/no-unused-prop-types
  elmentRef?: any;
}

const DesktopNav: React.FC<NavBarProps> = ({ navItems, activeMenu }) => {
  return (
    <Stack direction="row" spacing={4}>
      {navItems.map((item) => (
        <NavLink key={item.href} link={item} isActive={activeMenu === item.href} />
      ))}
    </Stack>
  );
};

const MobileNav: React.FC<NavBarProps> = ({ navItems, activeMenu }) => {
  return (
    <Stack bg="white" borderTop="1px" borderStyle="solid" borderColor="gray.200" p="16px" display={{ md: 'none' }}>
      {navItems.map((item) => (
        <NavLink key={item.href} link={item} isActive={activeMenu === item.href} />
      ))}
    </Stack>
  );
};

export const NavBar: React.FC<NavBarProps> = ({ navItems, activeMenu, elmentRef }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="nav"
      ref={elmentRef}
      w="100%"
      borderBottom="1px"
      borderStyle="solid"
      borderColor="gray.200"
      pos="fixed"
      top="0"
      bg="white"
      zIndex="10"
    >
      <Flex
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
            <DesktopNav navItems={navItems} activeMenu={activeMenu} />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} activeMenu={activeMenu} />
      </Collapse>
    </Box>
  );
};
