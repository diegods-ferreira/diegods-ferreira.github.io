import React from 'react';
import { Center } from '@chakra-ui/react';

interface ProjectsPageProps {
  elementRef: any;
  inView?: boolean;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ elementRef, inView = false }) => {
  return (
    <Center ref={elementRef} w="100%" bg="textTertiary.500" overflowX="hidden">
      <h1>ProjectsPage</h1>
    </Center>
  );
};
