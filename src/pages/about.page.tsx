import React from 'react';
import { Center, SlideFade, Stack, StackDivider, VStack } from '@chakra-ui/react';

import { AboutItem } from '../components/about/about-item.component';
import { AboutTitle } from '../components/about/about-title.component';

interface AboutPageProps {
  elementRef: any;
  inView?: boolean;
}

export const AboutPage: React.FC<AboutPageProps> = ({ elementRef, inView = false }) => {
  return (
    <Center ref={elementRef} w="100%" bg="whitesmoke" overflowX="hidden">
      <VStack
        w="100%"
        maxW="1200px"
        px="24px"
        py={{ base: '64px', md: '80px' }}
        spacing="24px"
        divider={<StackDivider />}
      >
        <Stack w="100%" direction={{ base: 'column', md: 'row' }} spacing="40px" alignItems="flex-start">
          <SlideFade
            in={inView}
            offsetX="-80px"
            transition={{ enter: { duration: 0.5 } }}
            style={{ maxWidth: '360px', width: '100%' }}
          >
            <AboutTitle>Sobre mim</AboutTitle>
          </SlideFade>

          <VStack flex="1" alignItems="flex-start" spacing={{ base: '8px', md: '16px' }}>
            <AboutItem inView={inView} delay={0.2}>
              Sou um desenvolvedor <i>front-end</i>, que mora em São Paulo - Brasil.
            </AboutItem>

            <AboutItem inView={inView} delay={0.3}>
              Gosto de projetar e construir sites e aplicativos <i>web</i> bonitos e funcionais, tendo um cuidado
              especial para produzir um código limpo e compreensível.
            </AboutItem>

            <AboutItem inView={inView} delay={0.4}>
              Adoro trabalho em equipe e boa comunicação, sempre aberto a <i>feedbacks</i> e disposto a aprender coisas
              novas.
            </AboutItem>

            <AboutItem inView={inView} delay={0.5}>
              Prezo por boa organização interna e clareza quanto a tudo que envolve o time.
            </AboutItem>

            <AboutItem inView={inView} delay={0.6}>
              No meu tempo livre gosto de jogar <i>videogames</i>, ler um bom livro ou conversar com amigos.
            </AboutItem>
          </VStack>
        </Stack>
      </VStack>
    </Center>
  );
};
