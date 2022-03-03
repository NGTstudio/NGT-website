import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import DefaultTheme from './themes/Default/Default';
import './style.global.css';
import Home from './screens/Home';

function App() {
  return (
    <ChakraProvider theme={DefaultTheme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
