import { getRandomNumberFromOneToFive } from '../utils/random-number-one-to-five.util';

interface FontStyles {
  size: Record<string, string>;
  weight: string;
}

interface PersonalProfileItem {
  label: string;
  fontStyles: FontStyles;
  delay: number;
}

const PERSONAL_PROFILE_ITEM_FONT_STYLES: Record<number, FontStyles> = {
  0: { size: { base: 'xl', md: '2xl' }, weight: 'light' },
  1: { size: { base: 'xl', md: '2xl' }, weight: 'light' },
  2: { size: { base: '2xl', md: '3xl' }, weight: 'normal' },
  3: { size: { base: '2xl', md: '3xl' }, weight: 'normal' },
  4: { size: { base: '3xl', md: '4xl' }, weight: 'bold' },
  5: { size: { base: '3xl', md: '4xl' }, weight: 'bold' }
};

const getPersonalProfileItemFontStyles = () => PERSONAL_PROFILE_ITEM_FONT_STYLES[getRandomNumberFromOneToFive()];

const getPersonalProfileItemDelay = () => 1 + getRandomNumberFromOneToFive() * 0.2;

export const personalProfileItems: PersonalProfileItem[] = [
  { label: 'pró-ativo', fontStyles: getPersonalProfileItemFontStyles(), delay: getPersonalProfileItemDelay() },
  { label: 'adaptável', fontStyles: getPersonalProfileItemFontStyles(), delay: getPersonalProfileItemDelay() },
  { label: 'autodidata', fontStyles: getPersonalProfileItemFontStyles(), delay: getPersonalProfileItemDelay() },
  { label: 'dedicado', fontStyles: getPersonalProfileItemFontStyles(), delay: getPersonalProfileItemDelay() },
  { label: 'trabalho em equipe', fontStyles: getPersonalProfileItemFontStyles(), delay: getPersonalProfileItemDelay() },
  { label: 'criativo', fontStyles: getPersonalProfileItemFontStyles(), delay: getPersonalProfileItemDelay() }
];
