import { ChakraProvider } from '@chakra-ui/react'
import DefaultTheme from '../themes/Default/Default';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module/dist/TagManager';
import '../style.global.css';
import { GTM_ID } from '../config';

const Website = ({ Component, pageProps }) => {
  useEffect(()=>{
      TagManager.initialize({gtmId: GTM_ID});
  }, []);

  return (
    <ChakraProvider theme={DefaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Website