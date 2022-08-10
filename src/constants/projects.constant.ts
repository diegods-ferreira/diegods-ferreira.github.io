import pegueiLogoImg from '../assets/images/peguei-logo.png';
import goBarberLogoImg from '../assets/images/go-barber-logo.png';
import beTheHeroLogoImg from '../assets/images/be-the-hero-logo.png';
import ecoletaLogoImg from '../assets/images/ecoleta-logo.png';

interface ProjectRepo {
  name: string;
  label?: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  slug: string;
  description: string;
  logo?: string;
  repos: ProjectRepo[];
}

export const GITHUB_USERNAME = 'diegods-ferreira';

export const projects: Project[] = [
  {
    title: 'Peguei!',
    subtitle: 'Trabalho de Graduação',
    slug: 'peguei',
    description:
      'Uma aplicação criada para facilitar a troca de favores entre pessoas que compraram determinado produtos e pessoas dispostas a realizar a entrega deste produto e ganhar um dinheiro extra.',
    logo: pegueiLogoImg,
    repos: [
      { name: 'tg-fatec-peguei-backend', label: 'Peguei! - Backend' },
      { name: 'tg-fatec-peguei-mobile', label: 'Peguei! - Mobile App' },
      { name: 'tg-fatec-peguei-web', label: 'Peguei! - Web App' }
    ]
  },
  {
    title: 'Go Barber',
    slug: 'go-barber',
    description:
      'A complete application created to bring together barbers and their possible customers, including a web application for the browser and a mobile application (IOS and Android). Its back-end is created with Node.js and shared with both front-end applications, ReactJS e React Native.',
    logo: goBarberLogoImg,
    repos: [{ name: 'go-barber' }]
  },
  {
    title: 'Be The Hero',
    slug: 'be-the-hero',
    description: 'Semana OmniStack 11 - API e Aplicação Web/Mobile: Be The Hero',
    logo: beTheHeroLogoImg,
    repos: [{ name: 'be-the-hero' }]
  },
  {
    title: 'Ecoleta',
    slug: 'ecoleta',
    description:
      'Uma aplicação para a realizar a aproximação entre os pontos de coleta de resíduos e aqueles que desejam descartá-los, com back-end construído com Node e o front-end web e mobile feitos com React e React Native, respectivamente.',
    logo: ecoletaLogoImg,
    repos: [{ name: 'ecoleta' }]
  }
];
