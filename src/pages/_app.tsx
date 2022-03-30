import { ChakraProvider } from '@chakra-ui/react';
import DefaultTheme from '../themes/Default/Default';
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module/dist/TagManager';
import '@fontsource/nunito/200.css';
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import '@fontsource/nunito/900.css';
import '@fontsource/press-start-2p/400.css';
import '../style.global.css';
import { GTM_ID } from '../config';
import ReactGA from 'react-ga4';

interface WebsiteProps {
  Component: React.FunctionComponent;
  pageProps: any;
}

const Website: React.FunctionComponent<WebsiteProps> = ({
  Component,
  pageProps,
}: WebsiteProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
    ReactGA.initialize('G-VV5KC401XE');
    ReactGA.send('pageview');
  }, []);

  return (
    <ChakraProvider theme={DefaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default Website;
