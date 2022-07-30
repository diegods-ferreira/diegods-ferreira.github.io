import React from 'react';
import { IconType } from 'react-icons';
import { FiGithub, FiGitlab, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Center, Icon, Link, SlideFade } from '@chakra-ui/react';

interface SocialMediaCardProps {
  type: 'linkedin' | 'github' | 'gitlab' | 'twitter' | 'instagram';
  href: string;
  inView?: boolean;
  delay?: number;
}

const icons: Record<string, IconType> = {
  linkedin: FiLinkedin,
  github: FiGithub,
  gitlab: FiGitlab,
  twitter: FiTwitter,
  instagram: FiInstagram
};

export const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ type, href, inView = false, delay }) => {
  return (
    <SlideFade
      in={inView}
      transition={{ enter: { duration: 0.5, delay } }}
      style={{
        borderRadius: '16px',
        boxShadow:
          '-5px -5px 10px rgba(255, 255, 255, .05), 5px 5px 10px rgba(0, 0, 0, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px rgba(255, 255, 255, .05)'
      }}
      whileHover={{
        scale: 1.1,
        boxShadow:
          '-5px -5px 15px rgba(255, 255, 255, .05), 5px 5px 15px rgba(0, 0, 0, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px rgba(255, 255, 255, .05)'
      }}
      whileTap={{
        boxShadow: 'inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, .05)'
      }}
    >
      <Link href={href} target="_blank" role="group">
        <Center boxSize={{ base: '56px', md: '80px' }} borderRadius="16px">
          <Icon
            as={icons[type]}
            boxSize={{ base: '20px', md: '24px' }}
            color="textSecondary.300"
            transition="0.5s"
            _groupHover={{ color: 'textSecondary.50' }}
          />
        </Center>
      </Link>
    </SlideFade>
  );
};
