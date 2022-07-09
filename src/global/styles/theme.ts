import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light'
};

const colors = {
  peachRed: {
    50: '#ffe1e1',
    100: '#ffdada',
    200: '#ffd4d4',
    300: '#ffcece',
    400: '#ffc8c8',
    500: '#ffc2c2',
    600: '#e6afaf',
    700: '#cc9b9b',
    800: '#b38888',
    900: '#997474'
  },
  peachOrange: {
    50: '#ffebd4',
    100: '#ffe7cb',
    200: '#ffe3c2',
    300: '#ffdfb9',
    400: '#ffdbb1',
    500: '#ffd7a8',
    600: '#e6c297',
    700: '#ccac86',
    800: '#b39776',
    900: '#998165'
  },
  textPrimary: {
    50: '#969a9b',
    100: '#818586',
    200: '#6c7172',
    300: '#575d5e',
    400: '#42484a',
    500: '#2d3436',
    600: '#292f31',
    700: '#242a2b',
    800: '#1f2426',
    900: '#1b1f20'
  },
  textSecondary: {
    50: '#b1b7b9',
    100: '#a1a8aa',
    200: '#929a9c',
    300: '#828b8e',
    400: '#737d80',
    500: '#636e72',
    600: '#596367',
    700: '#4f585b',
    800: '#454d50',
    900: '#3b4244'
  },
  textTertiary: {
    50: '#d9dfe1',
    100: '#d1d8db',
    200: '#c9d2d5',
    300: '#c1cbcf',
    400: '#bac5c9',
    500: '#b2bec3',
    600: '#a0abb0',
    700: '#8e989c',
    800: '#7d8589',
    900: '#6b7275'
  }
};

const components = {
  Text: {
    baseStyle: {
      fontFamily: '"Varela Round"'
    }
  },
  Heading: {
    baseStyle: {
      fontFamily: 'Montserrat'
    }
  }
};

export const theme = extendTheme({ config, colors, components });
