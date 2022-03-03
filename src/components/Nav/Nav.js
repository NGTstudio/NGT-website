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
import ReactGA from "react-ga4";

const Links = [];

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box bg={'#251E2B'} px={4} maxWidth="1400px" marginLeft="auto" marginRight="auto" mt={2}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        {/*<IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />*/}
        <HStack spacing={8} alignItems={'center'}>
          <Box>🌀 EvoVerses</Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          {/*<Button onClick={toggleColorMode} 
              mr={4}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>*/}
          <Link href='https://discord.gg/evoverses' _hover={{textDecoration: "none"}}>
            <Button
              variant={'solid'}
              colorScheme={'evoOrange'}
              size={'md'}
              borderRadius={20}
              px={5}
              color="white"
              onClick={()=>{
                ReactGA.event({
                  category: "conversion",
                  action: "open_discord",
                  label: "top_bar"
                });
              }}
            >
              Join 🌀 Discord
            </Button>
          </Link>
        </Flex>
      </Flex>

      {false && isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Nav;
