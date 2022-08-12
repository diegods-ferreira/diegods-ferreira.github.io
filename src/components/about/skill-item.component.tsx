import React from 'react';
import { Center, Icon, ScaleFade, Tooltip } from '@chakra-ui/react';

import { SkillIcon } from '../../constants/skills.constant';

interface SkillItemProps {
  inView?: boolean;
  delay?: number;
  label: string;
  icon: SkillIcon;
}

export const SkillItem: React.FC<SkillItemProps> = ({ inView = false, delay = 0, label, icon }) => {
  return (
    <Tooltip label={label} hasArrow>
      <ScaleFade
        in={inView}
        initialScale={0}
        transition={{ enter: { duration: 0.5, delay } }}
        style={{ width: '100%', height: '100%' }}
      >
        <Center
          boxSize="100%"
          borderRadius="full"
          transition="0.2s"
          cursor="pointer"
          role="group"
          _hover={{
            bg: 'rgba(255, 255, 255, 0.25)',
            boxShadow:
              '-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(174, 174, 192, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF',
            transform: 'scale(1.2)'
          }}
        >
          <Icon
            as={icon}
            boxSize={{ base: '32px', md: '40px' }}
            color="textSecondary.500"
            transition="0.2s"
            _groupHover={{ color: 'textPrimary.500' }}
          />
        </Center>
      </ScaleFade>
    </Tooltip>
  );
};
