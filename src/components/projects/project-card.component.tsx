import React from 'react';
import { Link } from 'react-router-dom';
import { MotionStyle, TargetAndTransition, VariantLabels } from 'framer-motion';
import { Heading, SlideFade, Stack, Text, VStack } from '@chakra-ui/react';

import { Project } from '../../constants/projects.constant';
import { ProjectAvatar } from './project-avatar.component';

const defaultContainerStyle: MotionStyle = {
  borderRadius: '16px',
  boxShadow:
    '-5px -5px 10px rgba(255, 255, 255, .2), 5px 5px 10px rgba(0, 0, 0, 0.2), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px rgba(255, 255, 255, 0.2)'
};

const defaultContainerStyleWhileHover: VariantLabels | TargetAndTransition = {
  scale: 1.05,
  boxShadow:
    '-5px -5px 15px rgba(255, 255, 255, .25), 5px 5px 15px rgba(0, 0, 0, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.15), inset 2px 2px 4px rgba(255, 255, 255, .25)'
};

const defaultContainerStyleWhileTap: VariantLabels | TargetAndTransition = {
  boxShadow: 'inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, .2)'
};

interface ProjectCardProps {
  project: Project;
  inView?: boolean;
  delay?: number;
  containerStyle?: MotionStyle;
  containerStyleWhileHover?: VariantLabels | TargetAndTransition;
  containerStyleWhileTap?: VariantLabels | TargetAndTransition;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  inView = false,
  delay = 0,
  containerStyle = defaultContainerStyle,
  containerStyleWhileHover = defaultContainerStyleWhileHover,
  containerStyleWhileTap = defaultContainerStyleWhileTap
}) => {
  return (
    <SlideFade
      in={inView}
      transition={{ enter: { duration: 0.5, delay } }}
      style={containerStyle}
      whileHover={containerStyleWhileHover}
      whileTap={containerStyleWhileTap}
    >
      <Stack
        as={Link}
        to={`/projects/${project.slug}`}
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center' }}
        borderRadius="16px"
        borderColor="textTertiary.600"
        p="24px"
        cursor="pointer"
        spacing={{ base: '16px', md: '32px' }}
      >
        <ProjectAvatar logo={project.logo} title={project.title || ''} />

        <VStack flex="1" alignItems="flex-start" spacing="16px">
          <VStack w="100%" alignItems={{ base: 'center', md: 'flex-start' }}>
            <Heading as="h2" size="md" fontWeight="semibold" color="textPrimary.500">
              {project.title}
            </Heading>

            {!!project.subtitle && (
              <Heading as="h3" size="xs" fontWeight="light" color="textPrimary.500">
                {project.subtitle}
              </Heading>
            )}
          </VStack>

          <Text noOfLines={3} fontSize="sm">
            {project.description}
          </Text>
        </VStack>
      </Stack>
    </SlideFade>
  );
};
