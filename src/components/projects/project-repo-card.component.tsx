import React from 'react';
import { TbGitFork } from 'react-icons/all';
import { FiAlertCircle, FiBook, FiEye, FiStar } from 'react-icons/fi';

import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Tooltip,
  VStack
} from '@chakra-ui/react';

import { GithubRepo } from '../../models/github-repo.model';

interface ProjectRepoCardProps {
  repo?: GithubRepo;
  isLoading?: boolean;
  isError?: boolean;
  retryCallback?: () => any | Promise<any>;
}

interface ErrorFeedbackProps {
  retryCallback?: () => any | Promise<any>;
}

const LoadingSkeleton: React.FC = () => {
  return (
    <>
      <HStack w="100%">
        <SkeletonCircle boxSize="16px" />
        <Skeleton h="19px" flex="1" />
      </HStack>

      <SkeletonText w="100%" noOfLines={2} spacing="4" />

      <HStack w="100%">
        <Skeleton w="44px" h="19px" />
        <Skeleton w="44px" h="19px" />
        <Skeleton w="44px" h="19px" />
        <Skeleton w="44px" h="19px" />
      </HStack>
    </>
  );
};

const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ retryCallback }) => {
  return (
    <>
      <HStack>
        <Icon as={FiAlertCircle} color="red.500" />

        <Heading as="h3" size="sm" color="red.500">
          Erro
        </Heading>
      </HStack>

      <Text>Ocorreu um erro ao tentar recuperar as informações desse repositório.</Text>

      <Button size="sm" borderRadius="full" variant="outline" colorScheme="textSecondary" onClick={retryCallback}>
        Tentar novamente
      </Button>
    </>
  );
};

export const ProjectRepoCard: React.FC<ProjectRepoCardProps> = ({
  repo,
  isLoading = true,
  isError = false,
  retryCallback
}) => {
  return (
    <Box
      p="32px"
      borderRadius="16px"
      boxShadow="-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(174, 174, 192, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF"
    >
      <VStack w="100%" alignItems="flex-start" justifyContent="space-between" spacing="16px">
        {(() => {
          if (isLoading) {
            return <LoadingSkeleton />;
          }

          if (isError) {
            return <ErrorFeedback retryCallback={retryCallback} />;
          }

          return (
            <>
              <HStack w="100%">
                <Icon as={FiBook} />

                <Heading as="h3" size="sm" color="textSecondary.900" textAlign="left">
                  <Link href={repo?.html_url} target="_blank" fontWeight="semibold">
                    {repo?.name}
                  </Link>
                </Heading>
              </HStack>

              {!!repo?.description && (
                <Text flex="1" fontSize="sm">
                  {repo.description}
                </Text>
              )}

              <HStack>
                <Tooltip label={`${repo?.forks_count} forks`} hasArrow>
                  <Tag size="sm" variant="outline" colorScheme="textTertiary">
                    <TagLeftIcon boxSize="12px" as={TbGitFork} />
                    <TagLabel>{repo?.forks_count}</TagLabel>
                  </Tag>
                </Tooltip>

                <Tooltip label={`${repo?.stargazers_count} stars`} hasArrow>
                  <Tag size="sm" variant="outline" colorScheme="textTertiary">
                    <TagLeftIcon boxSize="12px" as={FiStar} />
                    <TagLabel>{repo?.stargazers_count}</TagLabel>
                  </Tag>
                </Tooltip>

                <Tooltip label={`${repo?.watchers_count} watchers`} hasArrow>
                  <Tag size="sm" variant="outline" colorScheme="textTertiary">
                    <TagLeftIcon boxSize="12px" as={FiEye} />
                    <TagLabel>{repo?.watchers_count}</TagLabel>
                  </Tag>
                </Tooltip>

                <Tooltip label={`${repo?.open_issues_count} issues`} hasArrow>
                  <Tag size="sm" variant="outline" colorScheme="textTertiary">
                    <TagLeftIcon boxSize="12px" as={FiAlertCircle} />
                    <TagLabel>{repo?.open_issues_count}</TagLabel>
                  </Tag>
                </Tooltip>
              </HStack>
            </>
          );
        })()}
      </VStack>
    </Box>
  );
};
