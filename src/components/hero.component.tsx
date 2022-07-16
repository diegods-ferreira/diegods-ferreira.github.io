import React from 'react';
import { Heading, Text, VStack, Center, Image, Stack } from '@chakra-ui/react';

import profilePicture from '../assets/images/profile-picture.png';
import backgroundImg from '../assets/images/abstract_background_with_a_low_poly_design.jpg';

export const Hero: React.FC = () => {
  return (
    <Center w="100%" h="100vh" bgImage={`url(${backgroundImg})`} bgSize="cover">
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        h="100%"
        w="100%"
        maxW="1200px"
        spacing={{ base: '40px', md: '160px' }}
        pt="64px"
        justifyContent="center"
        alignItems="center"
      >
        <VStack w="100%" alignItems="flex-start" spacing="32px" p="24px">
          <VStack w="100%" alignItems="flex-start">
            <Text color="textTertiary.500">Olá, sou</Text>
            <Heading size="2xl">Diego Ferreira</Heading>
            <Heading
              size="md"
              fontWeight="medium"
              bgGradient="linear(to-r, textSecondary.500, textTertiary.500)"
              bgClip="text"
            >
              Desenvolvedor Front-end
            </Heading>
          </VStack>

          <Text>
            Apaixonado pelo desenvolvimento de <i>softwares</i> com interfaces limpas, simples e intuitivas, aplicando
            as melhores práticas e tecnologias disponíveis.
          </Text>
        </VStack>

        <Image
          src={profilePicture}
          h={{ base: '30vh', md: '50vh' }}
          alt="Diego Ferreira's profile picture"
          objectFit="contain"
        />
      </Stack>
    </Center>
  );
};
