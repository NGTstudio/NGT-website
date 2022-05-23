import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  useToast,
  Heading,
  Link,
} from '@chakra-ui/react';
import ReactGA from 'react-ga4';
import LinkNext from 'next/link';
import EvoVersesLogo from '../../public/evoverses.png';
import React from 'react';
import Image from 'next/image';


const Home: React.VoidFunctionComponent = () => {
  //const toast = useToast();
  const onClickOpenApp = () => {
    ReactGA.event({
      category: 'conversion',
      action: 'app',
      label: 'hero',
    });
    /*toast({
      title: `🦄 Soon!`,
      description:
        'Hey, we will launch the DEX soon, meanwhile be sure to join our Discord!',
      status: 'info',
      duration: 9000,
      isClosable: true,
    });*/
  };

  return (
    <Box id="video-wrapper">
      <video id="player" className="video-js vjs-default-skin" controls={false} autoPlay={true} width="1880px" height="980px" muted loop playsInline={true}>
        <source src="https://vtbhjtgoioenwaeaphpz.supabase.co/storage/v1/object/public/media-assets/evoverses_trailer_no_audio.mp4?t=2022-05-23T12:37:17.200Z" type="video/mp4" />
      </video>
      <Box className='hero' flexDirection={'column'} justifyContent={'center'} display={'flex'} minH={'110vh'}>
        <Box justifyContent={'center'} display={'flex'}>
          <Image src={EvoVersesLogo} width={300} height={300} />
        </Box>
        <Stack
          pb={20}
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Heading
            as='h1'
            opacity={1}
            textAlign="center"
            px={{ base: 10, md: 60 }}
            maxW="1100px"
            marginLeft="auto"
            marginRight="auto"
            lineHeight={1.7}
            color={'white'}
            size={'lg'}
            className='textShadow'
          >
            EvoVerses: A 3D <span style={{ color: 'rgb(255, 203, 58)' }}> Pokemon-inspired</span> game in Harmony ONE.
          </Heading>
          <Text
            opacity={1}
            textAlign="center"
            px={{ base: 10, md: 60 }}
            maxW="1100px"
            marginLeft="auto"
            marginRight="auto"
            lineHeight={1.7}
            color={'white'}
            fontSize={19}
            className='textShadow'
          >
            Discover the awesome story around the Evos, battle with people to be the best Evonatic out there or just chill with friends decorating your house and organizing your guild.
          </Text>
          <Flex
            flexDir={{ base: 'column', sm: 'row' }}
            rowGap={{ base: 4, sm: 0 }}
            columnGap={{ base: 0, sm: 4 }}
            pt={4}
          >
            <Link as={LinkNext}
              href="/app"
              _hover={{ textDecoration: 'none' }}>
              <Button
                variant={'solid'}
                bg="#7205D1"
                color="white"
                size={'md'}
                borderRadius={20}
                px={5}
                onClick={onClickOpenApp}
                _hover={{ backgroundColor: '#8b3ad1' }}
              >
                🚀 Open App
              </Button>
            </Link>
            <Link
              as={LinkNext}
              href="https://evoverses.com/discord"
              _hover={{ textDecoration: 'none' }}
              target={'_blank'}
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
                    label: 'hero',
                  });
                }}
              >
                Join 🌀 Discord
              </Button>
            </Link>
          </Flex>
        </Stack>
      </Box>
      <Box display={{ base: 'flex', md: 'flex' }} flexDirection={{ base: 'column', md: 'row' }} justifyContent={{ base: 'center', md: 'flex-end' }} alignItems={{ base: 'center', md: 'center' }} rowGap={3} columnGap={10} py={4} px={4}>
        <Link
          href="https://evoverses.com/whitepaper"
          _hover={{ textDecoration: 'none' }} color={'white'} className='textShadow'
          target={'_blank'}
        >🧾 Whitepaper</Link>
        <Link
          href="https://evoverses.com/medium"
          _hover={{ textDecoration: 'none' }} color={'white'} className='textShadow'
          target={'_blank'}
        >📰 Medium</Link>
        <Link
          href="https://evoverses.com/telegram"
          _hover={{ textDecoration: 'none' }} color={'white'} className='textShadow'
          target={'_blank'}
        >😎 Telegram Group</Link>
        <Link
          href="https://evoverses.com/twitter"
          _hover={{ textDecoration: 'none' }} color={'white'} className='textShadow'
          target={'_blank'}
        >🗣 Twitter</Link>
        <Link

          href="https://foxswap.one/#/swap?inputCurrency=ONE&outputCurrency=0x5b747e23a9E4c509dd06fbd2c0e3cB8B846e398F"
          _hover={{ textDecoration: 'none' }} className='textShadow'
          target={'_blank'}
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
                action: 'open_foxswap',
                label: 'bottom',
              });
            }}
          >
            💰 Buy $EVO
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
