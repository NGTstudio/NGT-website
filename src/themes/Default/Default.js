import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    evoOrange: {
      100: '#DE961A',
      200: '#DE961A',
      300: '#DE961A',
      400: '#DE961A',
      500: '#DE961A',
      600: '#DE961A',
      700: '#DE961A',
      800: '#DE961A',
      900: '#DE961A',
    },
  },
  fonts: {
    heading: 'nunito, sans-serif',
    body: 'nunito, sans-serif',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default theme;
