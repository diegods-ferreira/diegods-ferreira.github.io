import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Heading, HStack, IconButton, SimpleGrid, Tooltip, VStack } from '@chakra-ui/react';

import { ProjectCard } from '../components/projects/project-card.component';

import { projects } from '../constants/projects.constant';

export const ProjectsListPage: React.FC = () => {
  return (
    <VStack minH="100vh" bgColor="whitesmoke" spacing={{ base: '32px', md: '40px' }}>
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
        <Tooltip label="Voltar à página inicial" hasArrow>
          <IconButton
            as={Link}
            to="/"
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

        <Heading size="md" color="textSecondary.500">
          Meus projetos
        </Heading>
      </HStack>

      <VStack maxW="1200px" w="100%" pt="65px" px="24px" py={{ base: '64px', md: '80px' }}>
        <SimpleGrid w="100%" columns={{ base: 1, md: 2 }} gap="32px">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              inView
              delay={0.2 * (index + 1)}
              containerStyle={{
                borderRadius: '16px',
                boxShadow:
                  '-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(174, 174, 192, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF'
              }}
              containerStyleWhileTap={{
                boxShadow: 'inset 6px 6px 10px 0 rgba(0, 0, 0, 0.15), inset -6px -6px 10px 0 #FFFFFF'
              }}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};
