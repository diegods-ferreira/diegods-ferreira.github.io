import React from 'react';
import {
  Heading,
  Text,
  VStack,
  Center,
  Image,
  Stack,
  keyframes,
  SlideFade,
  ScaleFade,
  useBreakpointValue
} from '@chakra-ui/react';

import profilePicture from '../assets/images/profile-picture.png';
import backgroundImg from '../assets/images/abstract_background_with_a_low_poly_design.jpg';

interface HeroProps {
  elementRef: any;
  topOffset: number;
  inView?: boolean;
}

const animationKeyframes = keyframes`
  0% {
    transform: scale(0.95);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px transparent;
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 transparent;
  }
`;

export const HeroPage: React.FC<HeroProps> = ({ elementRef, topOffset, inView = false }) => {
  const profilePictureSize = useBreakpointValue({ base: '30vh', md: '50vh' });

  return (
    <Center
      ref={elementRef}
      w="100%"
      h={`calc(100vh - ${topOffset}px)`}
      bgImage={`url(${backgroundImg})`}
      bgSize="cover"
      borderBottom="1px"
      borderStyle="solid"
      borderColor="gray.200"
    >
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        h="100%"
        w="100%"
        maxW="1200px"
        spacing={{ base: '40px', md: '160px' }}
        justifyContent="center"
        alignItems="center"
      >
        <VStack w="100%" alignItems="flex-start" spacing="32px" p="24px">
          <VStack w="100%" alignItems="flex-start">
            <SlideFade in={inView} offsetX="-80px" transition={{ enter: { duration: 0.5 } }}>
              <Text color="textTertiary.500">Olá, sou</Text>
            </SlideFade>

            <SlideFade in={inView} offsetX="-80px" transition={{ enter: { duration: 0.5, delay: 0.5 } }}>
              <Heading size="2xl">Diego Ferreira</Heading>
            </SlideFade>

            <SlideFade in={inView} offsetX="-80px" transition={{ enter: { duration: 0.5, delay: 1 } }}>
              <Heading
                size="md"
                fontWeight="medium"
                bgGradient="linear(to-r, textSecondary.500, textTertiary.500)"
                bgClip="text"
              >
                Desenvolvedor Front-end
              </Heading>
            </SlideFade>
          </VStack>

          <SlideFade in={inView} offsetX="-80px" transition={{ enter: { duration: 0.5, delay: 1.5 } }}>
            <Text>
              Apaixonado pelo desenvolvimento de <i>softwares</i> com interfaces limpas, simples e intuitivas, aplicando
              as melhores práticas e tecnologias disponíveis.
            </Text>
          </SlideFade>
        </VStack>

        <Center>
          <ScaleFade
            in={inView}
            initialScale={0.8}
            transition={{ enter: { duration: 1.5 } }}
            style={{ width: profilePictureSize, height: profilePictureSize }}
          >
            <Image
              src={profilePicture}
              alt="Diego Ferreira's profile picture"
              h="100%"
              objectFit="contain"
              borderRadius="full"
              boxShadow="0 0 0 0 #ffc2c2"
              animation={`${animationKeyframes} 2s infinite`}
            />
          </ScaleFade>
        </Center>
      </Stack>
    </Center>
  );
};
