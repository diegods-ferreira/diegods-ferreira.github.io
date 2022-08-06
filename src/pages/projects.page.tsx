import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Center, Heading, Text, VStack } from '@chakra-ui/react';

import { getRepoReadme, getRepoReadmeHtml } from '../services/github.service';

interface ProjectsPageProps {
  elementRef: any;
  inView?: boolean;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ elementRef, inView = false }) => {
  const query = useQuery(['todos'], async () => getRepoReadme('imagic'), {
    onError: (err) => console.log('Erro', err),
    onSuccess: (response) => console.log(response)
  });

  return (
    <Center ref={elementRef} w="100%" bg="textTertiary.500" overflowX="hidden">
      <VStack w="100%" maxW="1200px" px="24px" py={{ base: '64px', md: '80px' }} spacing="40px">
        <Heading>ProjectsPage</Heading>

        {/* <Text color="textTertiary.50">{query.data?.content ? atob(query.data?.content) : 'Nada a mostrar'}</Text> */}

        {query.data ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{atob(query.data.content)}</ReactMarkdown>
        ) : (
          <Text>Nada a mostrar</Text>
        )}
      </VStack>
    </Center>
  );
};
