import React from 'react';
import { useQueries } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { VStack, Stack, Text, Heading, HStack, SimpleGrid } from '@chakra-ui/react';

import { getRepo } from '../services/github.service';

import { projects } from '../constants/projects.constant';

import { TitleBar } from '../components/title-bar.component';
import { ProjectAvatar } from '../components/projects/project-avatar.component';
import { ProjectRepoCard } from '../components/projects/project-repo-card.component';

export const ProjectDetailsPage: React.FC = () => {
  const { slug } = useParams();

  const project = projects.find((proj) => proj.slug === slug)!;

  const repoQueries = useQueries({
    queries: project.repos.map((repo) => {
      return {
        queryKey: ['repo', repo.name],
        queryFn: () => getRepo(repo.name)
      };
    })
  });

  return (
    <VStack minH="100vh" bgColor="whitesmoke" spacing={{ base: '32px', md: '40px' }}>
      <TitleBar title={project?.title || 'Teste'} />

      <VStack maxW="1200px" w="100%" pt="65px" px="24px" py={{ base: '64px', md: '80px' }} spacing="40px">
        <Stack
          w="100%"
          spacing="40px"
          direction={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <ProjectAvatar logo={project?.logo} title={project?.title || ''} />

          <VStack flex="1" alignItems="flex-start" spacing="32px">
            <HStack w="100%" justifyContent="space-between" alignItems="flex-start">
              <VStack w="100%" alignItems={{ base: 'center', md: 'flex-start' }} spacing="16px">
                <Heading as="h2" color="textPrimary.500" textAlign="left">
                  {project?.title}
                </Heading>

                {!!project?.subtitle && (
                  <Heading as="h3" size="md" fontWeight="light" color="textPrimary.500">
                    {project?.subtitle}
                  </Heading>
                )}
              </VStack>
            </HStack>

            <Text>{project?.description}</Text>
          </VStack>
        </Stack>

        <SimpleGrid w="100%" columns={{ base: 1, md: 2 }} gap="24px">
          {repoQueries.map((query) => (
            <ProjectRepoCard
              repo={query.data}
              isLoading={query.isLoading || query.isFetching}
              isError={query.isError}
              retryCallback={query.refetch}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};
