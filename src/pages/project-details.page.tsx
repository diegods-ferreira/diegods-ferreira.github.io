import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useQueries, useQuery } from '@tanstack/react-query';
import { FiAlertCircle, FiChevronRight } from 'react-icons/fi';

import {
  VStack,
  Stack,
  Text,
  Heading,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Icon,
  Button,
  StackDivider
} from '@chakra-ui/react';

import { getRepo, getRepoReadme } from '../services/github.service';

import { projects } from '../constants/projects.constant';

import { TitleBar } from '../components/title-bar.component';
import { ProjectAvatar } from '../components/projects/project-avatar.component';
import { ProjectRepoCard } from '../components/projects/project-repo-card.component';

interface ReadmeErrorFeedbackProps {
  retryCallback?: () => any | Promise<any>;
}

const ReadmeSkeleton: React.FC = () => {
  return (
    <VStack w="100%" spacing="24px">
      <Skeleton h="20px" w="75%" />
      <SkeletonText w="100%" noOfLines={10} spacing="4" />
    </VStack>
  );
};

const ReadmeErrorFeedback: React.FC<ReadmeErrorFeedbackProps> = ({ retryCallback }) => {
  return (
    <VStack w="100%" spacing="24px">
      <HStack>
        <Icon as={FiAlertCircle} color="red.500" />

        <Heading as="h3" size="sm" color="red.500">
          Erro
        </Heading>
      </HStack>

      <Text>Ocorreu um erro ao tentar recuperar o README desse repositório.</Text>

      <Button size="sm" borderRadius="full" variant="outline" colorScheme="textSecondary" onClick={retryCallback}>
        Tentar novamente
      </Button>
    </VStack>
  );
};

export const ProjectDetailsPage: React.FC = () => {
  const { slug } = useParams();

  const [selectedProjectSlug, setSelectedProjectSlug] = useState('');

  const project = projects.find((proj) => proj.slug === slug)!;

  const repoQueries = useQueries({
    queries: project.repos.map((repo) => {
      return {
        queryKey: ['repo', repo.name],
        queryFn: () => getRepo(repo.name)
      };
    })
  });

  const readmeQuery = useQuery({
    queryKey: ['readme'],
    queryFn: () => getRepoReadme(selectedProjectSlug),
    enabled: !!selectedProjectSlug
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
              key={uuidv4()}
              repo={query.data}
              isLoading={query.isLoading || query.isFetching}
              isError={query.isError}
              retryCallback={query.refetch}
              onClick={() => setSelectedProjectSlug(query.data?.name || '')}
              isSelected={query.data?.name === selectedProjectSlug}
            />
          ))}
        </SimpleGrid>

        {!!selectedProjectSlug && (
          <VStack w="100%" spacing="24px" p="24px" borderWidth="1px" borderRadius="16px" divider={<StackDivider />}>
            <HStack w="100%" justifyContent="flex-start">
              <Text>{selectedProjectSlug}</Text>
              <Icon as={FiChevronRight} />
              <Text fontWeight="bold">README.md</Text>
            </HStack>

            {(() => {
              if (readmeQuery.isLoading || readmeQuery.isFetching) {
                return <ReadmeSkeleton />;
              }

              if (readmeQuery.isError) {
                return <ReadmeErrorFeedback retryCallback={readmeQuery.refetch} />;
              }

              return <ReactMarkdown>{readmeQuery.data?.content || ''}</ReactMarkdown>;
            })()}
          </VStack>
        )}
      </VStack>
    </VStack>
  );
};
