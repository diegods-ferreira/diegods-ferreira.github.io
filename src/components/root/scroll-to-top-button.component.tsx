import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { ScaleFade, IconButton, useBreakpointValue } from '@chakra-ui/react';

interface ScrollToTopButtonProps {
  isVisible: boolean;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ isVisible }) => {
  const position = useBreakpointValue({ base: '24px', md: '80px' });

  return (
    <ScaleFade
      initialScale={0}
      in={isVisible}
      transition={{ enter: { duration: 0.5 }, exit: { duration: 0.5 } }}
      style={{
        position: 'fixed',
        right: position,
        bottom: position,
        borderRadius: '50%',
        boxShadow:
          '-5px -5px 10px rgba(255, 255, 255, .05), 5px 5px 10px rgba(0, 0, 0, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px rgba(255, 255, 255, .05)'
      }}
      whileHover={{
        scale: 1.1,
        boxShadow:
          '-5px -5px 15px rgba(255, 255, 255, .05), 5px 5px 15px rgba(0, 0, 0, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px rgba(255, 255, 255, .05)'
      }}
      whileTap={{
        boxShadow: 'inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, .05)'
      }}
    >
      <IconButton
        icon={<FiArrowUp />}
        aria-label="Scroll up"
        isRound
        px="0 !important"
        size={{ base: 'md', md: 'lg' }}
        variant="solid"
        bgColor="transparent"
        color="rgba(0, 0, 0, 0.5)"
        _hover={{}}
        _active={{}}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </ScaleFade>
  );
};
