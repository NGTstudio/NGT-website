import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from '@chakra-ui/icons';

import NavLink from '../NavLink/NavLink';
import ReactGA from 'react-ga4';
import { Link as LinkNext } from "next/link";

const Links = [
  {
    name: 'Blog',
    url: 'https://evoverses.medium.com/',
    event: {
      category: 'conversion',
      action: 'open_blog',
      label: 'menu',
    }
  },
  {
    name: 'Whitepaper',
    url: 'https://docs.evoverses.com',
    event: {
      category: 'conversion',
      action: 'open_whitepaper',
      label: 'menu',
    }
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/EvoVerses',
    event: {
      category: 'conversion',
      action: 'open_twitter',
      label: 'menu',
    }
  },
  {
    name: 'Telegram',
    url: 'https://t.me/evoversesOfficial',
    event: {
      category: 'conversion',
      action: 'open_telegram',
      label: 'menu',
    }
  },
];

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box
      bg={'#251E2B'}
      px={4}
      maxWidth="1400px"
      marginLeft="auto"
      marginRight="auto"
      mt={2}
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
          <Box>🌀 EvoVerses</Box>
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
              <NavLink key={link.url} href={link.url} analyticsEvent={link?.event}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
          <Link
           as={LinkNext}
            href="https://discord.gg/evoverses"
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              variant={'solid'}
              colorScheme={'evoOrange'}
              size={'md'}
              borderRadius={20}
              px={5}
              color="white"
              onClick={() => {
                ReactGA.event({
                  category: 'conversion',
                  action: 'open_discord',
                  label: 'top_bar',
                });
              }}
            >
              Join 🌀 Discord
            </Button>
          </Link>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(link => (
              <NavLink key={link.url} href={link.url} analyticsEvent={link?.event}>
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
