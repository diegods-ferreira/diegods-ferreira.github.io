import { TbBrandReactNative } from 'react-icons/tb';
import { IconType } from 'react-icons';
import {
  SiAndroid,
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiExpo,
  SiFigma,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiIonic,
  SiIos,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiTypescript,
  SiYarn
} from 'react-icons/si';

import { getRandomNumberFromOneToFive } from '../utils/random-number-one-to-five.util';

interface Skill {
  label: string;
  icon: IconType;
  delay: number;
}

const getSkillItemDelay = () => 2 + getRandomNumberFromOneToFive() * 0.2;

export const skillItems: Skill[] = [
  { label: 'HTML5', icon: SiHtml5, delay: getSkillItemDelay() },
  { label: 'CSS3', icon: SiCss3, delay: getSkillItemDelay() },
  { label: 'JavaScript', icon: SiJavascript, delay: getSkillItemDelay() },
  { label: 'TypeScript', icon: SiTypescript, delay: getSkillItemDelay() },
  { label: 'Git', icon: SiGit, delay: getSkillItemDelay() },
  { label: 'React', icon: SiReact, delay: getSkillItemDelay() },
  { label: 'Node.JS', icon: SiNodedotjs, delay: getSkillItemDelay() },
  { label: 'React Native', icon: TbBrandReactNative, delay: getSkillItemDelay() },
  { label: 'Angular', icon: SiAngular, delay: getSkillItemDelay() },
  { label: 'IONIC', icon: SiIonic, delay: getSkillItemDelay() },
  { label: 'Bootstrap', icon: SiBootstrap, delay: getSkillItemDelay() },
  { label: 'SASS', icon: SiSass, delay: getSkillItemDelay() },
  { label: 'Styled Components', icon: SiStyledcomponents, delay: getSkillItemDelay() },
  { label: 'Figma', icon: SiFigma, delay: getSkillItemDelay() },
  { label: 'Android', icon: SiAndroid, delay: getSkillItemDelay() },
  { label: 'iOS', icon: SiIos, delay: getSkillItemDelay() },
  { label: 'Expo', icon: SiExpo, delay: getSkillItemDelay() },
  { label: 'GitHub', icon: SiGithub, delay: getSkillItemDelay() },
  { label: 'GitLab', icon: SiGitlab, delay: getSkillItemDelay() },
  { label: 'NPM', icon: SiNpm, delay: getSkillItemDelay() },
  { label: 'Yarn', icon: SiYarn, delay: getSkillItemDelay() },
  { label: 'MongoDB', icon: SiMongodb, delay: getSkillItemDelay() },
  { label: 'PostgreSQL', icon: SiPostgresql, delay: getSkillItemDelay() },
  { label: 'MySQL', icon: SiMysql, delay: getSkillItemDelay() },
  { label: 'SQL Server', icon: SiMicrosoftsqlserver, delay: getSkillItemDelay() }
];
