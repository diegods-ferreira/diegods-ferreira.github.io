import React from 'react';
import { Center, Heading, HStack, Image, ScaleFade, Text, VStack } from '@chakra-ui/react';

import { SocialMediaCard } from '../components/contact/social-media-card.component';

import profilePicture from '../assets/images/profile-picture.png';

interface ContactPageProps {
  elementRef: any;
  inView?: boolean;
}

export const ContactPage: React.FC<ContactPageProps> = ({ elementRef, inView = false }) => {
  return (
    <Center ref={elementRef} w="100%" bg="textPrimary.500" overflowX="hidden">
      <VStack w="100%" maxW="1200px" px="24px" py={{ base: '64px', md: '80px' }} spacing="40px">
        <ScaleFade initialScale={0} in={inView} transition={{ enter: { duration: 0.5 } }}>
          <Heading color="textTertiary.500" size={{ base: 'lg', md: 'xl' }}>
            Contato
          </Heading>
        </ScaleFade>

        <ScaleFade initialScale={0} in={inView} transition={{ enter: { duration: 0.5, delay: 0.5 } }}>
          <Image src={profilePicture} alt="Diego Ferreira's profile picture" boxSize={{ base: '120px', md: '200px' }} />
        </ScaleFade>

        <ScaleFade initialScale={0} in={inView} transition={{ enter: { duration: 0.5, delay: 1 } }}>
          <Text color="textSecondary.50" fontSize={{ base: 'md', md: 'lg' }} align="center">
            Você pode me contrar nas seguintes redes sociais
          </Text>
        </ScaleFade>

        <HStack spacing="0" wrap="wrap" gap={{ base: '16px', md: '40px' }} justifyContent="center">
          <SocialMediaCard type="github" href="https://github.com/diegods-ferreira" inView={inView} delay={1.5} />

          <SocialMediaCard type="gitlab" href="https://gitlab.com/diegods-ferreira" inView={inView} delay={1.7} />

          <SocialMediaCard type="instagram" href="https://www.instagram.com/diegodsf/" inView={inView} delay={1.9} />

          <SocialMediaCard
            type="linkedin"
            href="https://www.linkedin.com/in/diego-de-souza-ferreira/"
            inView={inView}
            delay={2.1}
          />

          <SocialMediaCard type="twitter" href="https://twitter.com/diegoodsf" inView={inView} delay={2.3} />
        </HStack>
      </VStack>
    </Center>
  );
};
