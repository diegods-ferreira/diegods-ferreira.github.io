import React from 'react';
import { Center, Stack, StackDivider, VStack } from '@chakra-ui/react';

import { AboutItem } from '../components/about/about-item.component';
import { AboutTitle } from '../components/about/about-title.component';

export const AboutPage: React.FC = () => {
  return (
    <Center w="100%" bg="whitesmoke">
      <VStack
        w="100%"
        maxW="1200px"
        px="24px"
        py={{ base: '64px', md: '80px' }}
        spacing="24px"
        divider={<StackDivider />}
      >
        <Stack w="100%" direction={{ base: 'column', md: 'row' }} spacing="40px" alignItems="flex-start">
          <AboutTitle>Sobre mim</AboutTitle>

          <VStack flex="1" alignItems="flex-start" spacing={{ base: '8px', md: '16px' }}>
            <AboutItem>
              Sou um desenvolvedor <i>front-end</i>, que mora em São Paulo - Brasil.
            </AboutItem>

            <AboutItem>
              Gosto de projetar e construir sites e aplicativos <i>web</i> bonitos e funcionais, tendo um cuidado
              especial para produzir um código limpo e compreensível.
            </AboutItem>

            <AboutItem>
              Adoro trabalho em equipe e boa comunicação, sempre aberto a <i>feedback</i> e disposto a aprender coisas
              novas.
            </AboutItem>

            <AboutItem>Prezo por boa organização interna e clareza quanto tudo que envolve o time.</AboutItem>

            <AboutItem>
              No meu tempo livre, gosto de jogar <i>videogames</i>, ler um bom livro ou conversar com amigos.
            </AboutItem>
          </VStack>
        </Stack>
      </VStack>
    </Center>
  );
};
