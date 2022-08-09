import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Heading, HStack, IconButton, SlideFade, Tooltip } from '@chakra-ui/react';

interface TitleBarProps {
  title: string;
}

export const TitleBar: React.FC<TitleBarProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <HStack
      as="nav"
      w="100%"
      h="65px"
      px={{ base: '8px', md: '120px' }}
      borderBottom="1px"
      borderStyle="solid"
      borderColor="gray.200"
      pos="fixed"
      top="0"
      bgColor="rgba(255, 255, 255, 0.5)"
      transition="0.5s"
      backdropFilter="blur(8px)"
      zIndex="10"
      spacing={{ base: '16px', md: '40px' }}
      boxShadow="lg"
    >
      <SlideFade in offsetX="-100%" offsetY="0px" transition={{ enter: { duration: 0.5 } }}>
        <Tooltip label="Voltar à página anterior" hasArrow>
          <IconButton
            onClick={() => navigate(-1)}
            icon={<FiArrowLeft size={24} />}
            aria-label="Go back button"
            variant="ghost"
            bgColor="transparent"
            color="textSecondary.500"
            size={{ base: 'md', md: 'lg' }}
            px="0 !important"
            isRound
          />
        </Tooltip>
      </SlideFade>

      <SlideFade in offsetX="100%" offsetY="0px" transition={{ enter: { duration: 0.5, delay: 0.5 } }}>
        <Heading size="md" color="textSecondary.500">
          {title}
        </Heading>
      </SlideFade>
    </HStack>
  );
};
