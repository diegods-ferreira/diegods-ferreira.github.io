import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Box, Flex, IconButton, Stack, Collapse, Icon, useDisclosure, Avatar, ScaleFade } from '@chakra-ui/react';

import { NavItem, NavItemHref, NavLink } from './nav-link.component';

interface GeneralNavBarProps {
  navItems: NavItem[];
  activeMenu: NavItemHref;
}

interface NavBarProps {
  elmentRef?: any;
}

interface MobileNavProps {
  isOpen: boolean;
}

const DesktopNav: React.FC<GeneralNavBarProps> = ({ navItems, activeMenu }) => {
  return (
    <Stack direction="row" spacing={4}>
      {navItems.map((item, index) => (
        <NavLink key={item.href} link={item} isActive={activeMenu === item.href} inView delay={index * 0.2} />
      ))}
    </Stack>
  );
};

const MobileNav: React.FC<GeneralNavBarProps & MobileNavProps> = ({ navItems, activeMenu, isOpen }) => {
  return (
    <Stack borderTop="1px" borderStyle="solid" borderColor="gray.200" p="16px" display={{ md: 'none' }}>
      {navItems.map((item, index) => (
        <NavLink key={item.href} link={item} isActive={activeMenu === item.href} inView={isOpen} delay={index * 0.1} />
      ))}
    </Stack>
  );
};

export const NavBar: React.FC<GeneralNavBarProps & NavBarProps> = ({ navItems, activeMenu, elmentRef }) => {
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
      bgColor={isOpen ? 'white' : 'rgba(255, 255, 255, 0.75)'}
      transition="0.5s"
      backdropFilter="blur(8px)"
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
          <ScaleFade initialScale={0} in transition={{ enter: { duration: 0.5 } }}>
            <IconButton
              onClick={onToggle}
              icon={<Icon as={isOpen ? FiX : FiMenu} w={5} h={5} />}
              variant="ghost"
              colorScheme="textSecondary"
              aria-label="Toggle Navigation"
            />
          </ScaleFade>
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'flex-end', md: 'start' }}>
          <ScaleFade initialScale={0} in transition={{ enter: { duration: 0.5 } }}>
            <Avatar
              name="Diego Ferreira"
              bgGradient="linear(to-r, peachRed.500, peachOrange.500)"
              fontFamily="Montserrat"
              fontWeight="bold"
            />
          </ScaleFade>

          <Flex flex={{ base: 1 }} display={{ base: 'none', md: 'flex' }} justifyContent="flex-end">
            <DesktopNav navItems={navItems} activeMenu={activeMenu} />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen}>
        <MobileNav navItems={navItems} activeMenu={activeMenu} isOpen={isOpen} />
      </Collapse>
    </Box>
  );
};
