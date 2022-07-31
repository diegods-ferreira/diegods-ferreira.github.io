import React from 'react';
import { Center, Stack, StackDivider, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import { AboutItem } from '../components/about/about-item.component';
import { AboutTitle } from '../components/about/about-title.component';
import { PersonalProfileItem } from '../components/about/personal-profile-item.component';

interface AboutPageProps {
  elementRef: any;
  inView?: boolean;
}

const PERSONAL_PROFILE_ITEM_FONT_STYLES: Record<number, Record<string, string>> = {
  0: { size: '2xl', weight: 'light' },
  1: { size: '2xl', weight: 'light' },
  2: { size: '3xl', weight: 'normal' },
  3: { size: '3xl', weight: 'normal' },
  4: { size: '4xl', weight: 'bold' },
  5: { size: '4xl', weight: 'bold' }
};

const getRandomNumberFromOneToFive = () => Math.round((Math.random() * 10) / 2);

const getPersonalProfileItemFontStyles = () => PERSONAL_PROFILE_ITEM_FONT_STYLES[getRandomNumberFromOneToFive()];
const getPersonalProfileItemDelay = () => 1 + getRandomNumberFromOneToFive() * 0.2;

const personalProfileItems = [
  { label: 'pró-ativo', fontStyles: getPersonalProfileItemFontStyles(), delay: getPersonalProfileItemDelay() },
  { label: 'adaptável', fontStyles: getPersonalProfileItemFontStyles(), delay: getPersonalProfileItemDelay() },
  { label: 'autodidata', fontStyles: getPersonalProfileItemFontStyles(), delay: getPersonalProfileItemDelay() },
  { label: 'dedicado', fontStyles: getPersonalProfileItemFontStyles(), delay: getPersonalProfileItemDelay() },
  { label: 'trabalho em equipe', fontStyles: getPersonalProfileItemFontStyles(), delay: getPersonalProfileItemDelay() },
  { label: 'criativo', fontStyles: getPersonalProfileItemFontStyles(), delay: getPersonalProfileItemDelay() }
];

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
          <AboutTitle inView={inView}>Sobre mim</AboutTitle>

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

        <Stack w="100%" direction={{ base: 'column', md: 'row' }} spacing="40px" alignItems="flex-start">
          <AboutTitle inView={inView} delay={0.8}>
            Perfil pessoal
          </AboutTitle>

          <Wrap justify="center" spacing="16px" overflow="visible">
            {personalProfileItems.map((item) => (
              <WrapItem key={item.label}>
                <PersonalProfileItem
                  fontSize={item.fontStyles.size}
                  fontWeight={item.fontStyles.weight}
                  inView={inView}
                  delay={item.delay}
                >
                  {item.label}
                </PersonalProfileItem>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </VStack>
    </Center>
  );
};
