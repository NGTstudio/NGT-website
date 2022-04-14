// @ts-nocheck
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import NavLink from '../NavLink/NavLink';
import ReactGA from 'react-ga4';
import LinkNext from 'next/link';

/*export interface MenuLinkProps {
  name: string;
  url: string;
  event: AnalyticsEventProps;
}

export interface AnalyticsEventProps {
  category: string;
  action: string;
  label: string;
}*/

const Links = [
  {
    name: 'Discord',
    url: 'https://evoverses.com/discord',
    event: {
      category: 'conversion',
      action: 'open_discord',
      label: 'menu',
    },
  },
  {
    name: 'Blog',
    url: 'https://evoverses.com/medium',
    event: {
      category: 'conversion',
      action: 'open_blog',
      label: 'menu',
    },
  },
  {
    name: 'Whitepaper',
    url: 'https://evoverses.com/whitepaper',
    event: {
      category: 'conversion',
      action: 'open_whitepaper',
      label: 'menu',
    },
  },
  {
    name: 'Twitter',
    url: 'https://evoverses.com/twitter',
    event: {
      category: 'conversion',
      action: 'open_twitter',
      label: 'menu',
    },
  },
  {
    name: 'Telegram',
    url: 'https://evoverses.com/telegram',
    event: {
      category: 'conversion',
      action: 'open_telegram',
      label: 'menu',
    },
  },
];

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box
      bg={'transparent'}
      px={4}
      maxWidth="1400px"
      marginLeft="auto"
      marginRight="auto"
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
        <Link
            as={LinkNext}
            href="https://evoverses.com"
            _hover={{ textDecoration: 'none' }}
          >
            <Box>🌀 EvoVerses</Box>
          </Link>
        </HStack>
        <Flex alignItems={'center'}>
          {/*<Button onClick={toggleColorMode} 
              mr={4}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>*/}
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            mr={10}
          >
            {Links.map(link => (
              <NavLink
                key={link.url}
                href={link.url}
                analyticsEvent={link?.event}
              >
                {link.name}
              </NavLink>
            ))}
          </HStack>
          <Link
            as={LinkNext}
            href="/app"
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              variant={'solid'}
              bg="#7205D1"
              size={'md'}
              borderRadius={20}
              px={5}
              color="white"
              _hover={{ backgroundColor: '#8b3ad1'}}
              onClick={() => {
                ReactGA.event({
                  category: 'conversion',
                  action: 'open_app',
                  label: 'top_bar',
                });
              }}
            >
              🚀 Open App
            </Button>
          </Link>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(link => (
              <NavLink
                key={link.url}
                href={link.url}
                analyticsEvent={link?.event}
              >
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Nav;
