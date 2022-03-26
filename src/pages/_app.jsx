import { ChakraProvider } from '@chakra-ui/react'
import DefaultTheme from '../themes/Default/Default';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module/dist/TagManager';
import '../style.global.css';
import { GTM_ID } from '../config';
import ReactGA from "react-ga4";

const Website = ({ Component, pageProps }) => {
  useEffect(()=>{
      TagManager.initialize({gtmId: GTM_ID});
      ReactGA.initialize("G-VV5KC401XE");
      ReactGA.send("pageview");
  }, []);

  return (
    <ChakraProvider theme={DefaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Website