import React from 'react';
import { SimpleGrid, VStack } from '@chakra-ui/react';

import { ProjectCard } from '../components/projects/project-card.component';
import { TitleBar } from '../components/title-bar.component';

import { projects } from '../constants/projects.constant';

export const ProjectsListPage: React.FC = () => {
  return (
    <VStack minH="100vh" bgColor="whitesmoke" spacing={{ base: '32px', md: '40px' }}>
      <TitleBar title="Meus projetos" />

      <VStack maxW="1200px" w="100%" pt="65px" px="24px" py={{ base: '64px', md: '80px' }}>
        <SimpleGrid w="100%" columns={{ base: 1, md: 2 }} gap="32px">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              inView
              delay={0.2 * (index + 1) + 1}
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
