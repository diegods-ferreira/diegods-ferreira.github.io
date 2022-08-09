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
  onClick: () => void;
  isSelected?: boolean;
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
  retryCallback,
  onClick,
  isSelected = false
}) => {
  const repoIndicators = [
    { label: 'forks', icon: TbGitFork, value: repo?.forks_count },
    { label: 'stars', icon: FiStar, value: repo?.stargazers_count },
    { label: 'watchers', icon: FiEye, value: repo?.watchers_count },
    { label: 'issues', icon: FiAlertCircle, value: repo?.open_issues_count }
  ];

  return (
    <Box
      as="button"
      p="32px"
      borderWidth={isSelected ? '0' : '1px'}
      borderRadius="16px"
      transition="0.2s"
      boxShadow={
        isSelected
          ? '-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(174, 174, 192, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF'
          : 'none'
      }
      transform={`scale(${isSelected ? '1.025' : '1'})`}
      disabled={isLoading || isError || isSelected}
      onClick={onClick}
      _hover={{
        borderColor: 'textTertiary.500'
      }}
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

                <Heading
                  as="h3"
                  size="sm"
                  color={isSelected ? 'textSecondary.900' : 'textSecondary.500'}
                  textAlign="left"
                  fontWeight="semibold"
                  transition="0.2s"
                >
                  <Link href={repo?.html_url} target="_blank">
                    {repo?.name}
                  </Link>
                </Heading>
              </HStack>

              {!!repo?.description && (
                <Text
                  flex="1"
                  fontSize="sm"
                  textAlign="left"
                  transition="0.2s"
                  color={isSelected ? 'textSecondary.500' : 'textSecondary.200'}
                >
                  {repo.description}
                </Text>
              )}

              <HStack>
                {repoIndicators.map((indicator) => (
                  <Tooltip key={indicator.label} label={`${indicator.value || 0} ${indicator.label}`} hasArrow>
                    <Tag
                      size="sm"
                      variant="outline"
                      colorScheme={isSelected ? 'gray' : 'textTertiary'}
                      transition="0.2s"
                    >
                      <TagLeftIcon boxSize="12px" as={indicator.icon} />
                      <TagLabel>{indicator.value || 0}</TagLabel>
                    </Tag>
                  </Tooltip>
                ))}
              </HStack>
            </>
          );
        })()}
      </VStack>
    </Box>
  );
};
