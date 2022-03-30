import { Box, Stack, useToast, Heading, Text, Image } from '@chakra-ui/react';
import Nav from '../components/Nav/Nav';
import React, { useEffect, useState } from 'react';
import LoadingOverlay from '../components/LoadingOverlay';
import Countdown from 'react-countdown';

const PUBLIC_SALE_ENDS_DATE = new Date(1650189600 * 1000);

const useCountdown = () => {
  const [_days, _setDays] = useState('');
  const [_hours, _setHours] = useState('');
  const [_minutes, _setMinutes] = useState('');
  const [_seconds, _setSeconds] = useState('');

  useEffect(() => {
    const _interval = setInterval(() => {
      let date_now = new Date();
      // get total seconds between the times
      let delta = Math.abs(PUBLIC_SALE_ENDS_DATE - date_now) / 1000;

      // calculate (and subtract) whole days
      let days = Math.floor(delta / 86400);
      delta -= days * 86400;

      // calculate (and subtract) whole hours
      let hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;

      // calculate (and subtract) whole minutes
      let minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;

      // what's left is seconds
      let seconds = Math.floor(delta % 60); // in theory the modulus is not required

      let _textDays = days.length < 2 ? `0${days}` : days;
      let _textHours = hours.length < 2 ? `0${hours}` : hours;
      let _textMinutes = minutes.length < 2 ? `0${minutes}` : minutes;
      let _textSeconds = seconds.length < 2 ? `0${seconds}` : seconds;

      //_setText(`${_textDays}:${_textHours}:${_textMinutes}:${_textSeconds}`);
      _setDays(_textDays);
      _setHours(_textHours);
      _setMinutes(_textMinutes);
      _setSeconds(_textSeconds);
    }, 1000);
    return () => {
      if (_interval) clearInterval(_interval);
    };
  });
  return [_days, _hours, _minutes, _seconds];
};

const Page: React.VoidFunctionComponent = () => {
  const toast = useToast();
  const [days, hours, minutes, seconds] = useCountdown();

  return (
    <div
      style={{
        backgroundImage: "url('/test.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        margin: 0,
        padding: 0,
      }}
    >
      <Nav />
      <Stack
        flexDir={'column'}
        justifyContent="center"
        alignItems="center"
        style={{
          height: `calc(100% - 64px)`,
        }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 20px',
          }}
        >
          <Box
            style={{
              background: '#251E2B',
              borderRadius: 10,
              padding: '8px 8px',
              minWidth: 300,
              minHeight: 400,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1.8rem',
            }}
          >
            <Image boxSize={'150px'} src={'./loading.gif'} />
            <Heading
              mt={6}
              mb={5}
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: 600,
                textAlign: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                lineHeight: 1.8,
                fontSize: '1.4rem',
              }}
            >
              You can claiming your tokens in:
            </Heading>
            <Text
              textAlign={'center'}
              style={{
                textShadow:
                  '0 0 2px black, 0 0 6px black, 0 0 6px black, 0 0 6px black',
                fontFamily: "'Press Start 2P'",
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: 600,
                textAlign: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                lineHeight: 1.8,
                fontSize: '1rem',
                filter: 'drop-shadow(0px 0px 6px #DE961A)',
              }}
            >
              {days} days, {hours} hours, {minutes} minutes, and {seconds}{' '}
              seconds
            </Text>
          </Box>
        </Box>
      </Stack>
      <LoadingOverlay hide />
    </div>
  );
};

export default Page;
