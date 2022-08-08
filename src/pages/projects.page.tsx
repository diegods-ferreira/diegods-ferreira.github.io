import React from 'react';
import { Button, Center, Heading, SimpleGrid, SlideFade, VStack } from '@chakra-ui/react';

import { projects } from '../constants/projects.constant';

import { ProjectCard } from '../components/projects/project-card.component';

interface ProjectsPageProps {
  elementRef: any;
  inView?: boolean;
}

const preferedProjectsTitles = ['Peguei!', 'Go Barber', 'Be The Hero', 'Ecoleta'];

const proferedProjects = projects.filter((project) => preferedProjectsTitles.includes(project.title));

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ elementRef, inView = false }) => {
  return (
    <Center ref={elementRef} w="100%" bgColor="textTertiary.500" overflowX="hidden">
      <VStack w="100%" maxW="1200px" px="24px" py={{ base: '64px', md: '80px' }} spacing="40px">
        <SlideFade in={inView} offsetX="0px" offsetY="-100%" transition={{ enter: { duration: 0.5 } }}>
          <Heading>Projetos</Heading>
        </SlideFade>

        <SimpleGrid w="100%" columns={{ base: 1, md: 2 }} gap="32px">
          {proferedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} inView={inView} delay={0.3 * (index + 1)} />
          ))}
        </SimpleGrid>

        <Button
          color="textPrimary.300"
          colorScheme="textTertiary"
          px="32px"
          rounded="full"
          transition="0.5s"
          _hover={{
            transform: 'scale(1.1)',
            color: 'textPrimary.400',
            boxShadow:
              '-5px -5px 10px rgba(255, 255, 255, .2), 5px 5px 10px rgba(0, 0, 0, 0.2), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px rgba(255, 255, 255, 0.2)'
          }}
          _active={{
            boxShadow: 'inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, .2)'
          }}
        >
          Ver mais...
        </Button>
      </VStack>
    </Center>
  );
};
