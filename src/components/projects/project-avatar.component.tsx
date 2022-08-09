import React from 'react';
import { Avatar, Center, Image } from '@chakra-ui/react';

interface ProjectAvatarProps {
  logo?: string;
  title: string;
}

export const ProjectAvatar: React.FC<ProjectAvatarProps> = ({ logo, title }) => {
  return (
    <Center boxSize={{ base: '96px', md: '128px' }} borderRadius="16px" p="8px">
      {logo ? (
        <Image src={logo} objectFit="contain" alt={title} />
      ) : (
        <Avatar size={{ base: 'xl', md: '2xl' }} name={title} />
      )}
    </Center>
  );
};
