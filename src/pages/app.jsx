// @ts-nocheck
import { Box, Stack, useToast, Heading, Text, Image, Button, Link } from "@chakra-ui/react";
import Nav from "../components/Nav/Nav";
import React, { useEffect, useState } from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import Countdown from "react-countdown";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../components/wallet/connectors"
import { isDevMode, getChainID, getvEVOTokenAddress } from "../config";
import LinkNext from 'next/link';

import claimVEvoToken from "../contracts/claimVEvoToken";

const PUBLIC_SALE_ENDS_DATE = new Date(1650204000 * 1000);

const useCountdown = () => {
  const [_days, _setDays] = useState("");
  const [_hours, _setHours] = useState("");
  const [_minutes, _setMinutes] = useState("");
  const [_seconds, _setSeconds] = useState("");

  useEffect(() => {
    const _interval = setInterval(() => {
      const date_now = new Date();
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

      let _textDays = days.toString().length < 2 ? `0${days}` : days.toString();
      let _textHours =
        hours.toString().length < 2 ? `0${hours}` : hours.toString();
      let _textMinutes =
        minutes.toString().length < 2 ? `0${minutes}` : minutes.toString();
      let _textSeconds =
        seconds.toString().length < 2 ? `0${seconds}` : seconds.toString();

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


const Page = () => {
  const { active, account, library, connector, activate, deactivate, chainId } = useWeb3React();
  const toast = useToast();
  const [days, hours, minutes, seconds] = useCountdown();
  const [claimableTokens, setClaimableTokens] = useState("0");
  const [isLoading, setLoading] = useState(false);

  const connect = async () => {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', true)
    } catch (ex) {
      console.log(ex)
    }
  }

  const disconnect = async () => {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])


  return (
    <div
      style={{
        backgroundImage: "url('/test.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Nav />
      <Stack
        flexDir={"column"}
        justifyContent="center"
        alignItems="center"
        style={{
          height: `calc(100% - 64px)`,
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 20px",
          }}
        >
          <Box
            style={{
              background: "#251E2B",
              borderRadius: 10,
              minWidth: 300,
              minHeight: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1.8rem",
            }}
          >
            <Heading
              mt={6}
              mb={5}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: 600,
                textAlign: "center",
                paddingLeft: 20,
                paddingRight: 20,
                lineHeight: 1.8,
                fontSize: "1.4rem",
              }}
            >
              You can start staking your tokens in:
            </Heading>
            <Text
              textAlign={"center"}
              style={{
                textShadow:
                  "0 0 2px black, 0 0 6px black, 0 0 6px black, 0 0 6px black",
                fontFamily: "'Press Start 2P'",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: 600,
                textAlign: "center",
                paddingLeft: 20,
                paddingRight: 20,
                lineHeight: 1.8,
                fontSize: "1rem",
                filter: "drop-shadow(0px 0px 6px #DE961A)",
              }}
            >
              {days} days, {hours} hours, {minutes} minutes, and {seconds}{" "}
              seconds
            </Text>
            <Image mt={5} boxSize={"150px"} src={"./carcoid.gif"} />
            {
              chainId !== getChainID() && (
                <Button
                mt={5}
                  variant={'solid'}
                  bg="#959595"
                  color="white"
                  size={'md'}
                  borderRadius={20}
                  px={5}
                  style={{
                    cursor: 'not-allowed!important'
                  }}
                  _hover={{
                    cursor: 'not-allowed!important'
                  }}
                >
                  ❌ Wrong network!
                </Button>
              )
            }
            {
              chainId === getChainID() && (
                <Stack mt={5} direction='row' spacing={4}>
                  {
                    !active && (
                      <Button
                        variant={'solid'}
                        colorScheme={'evoOrange'}
                        size={'md'}
                        borderRadius={20}
                        px={5}
                        color="white"
                        onClick={connect}
                      >
                        🌀 Connect to MetaMask
                      </Button>
                    )
                  }
                  {active && (
                    <Button
                      variant={'solid'}
                      backgroundColor={'#DE961A'}
                      size={'md'}
                      borderRadius={20}
                      px={5}
                      color="white"
                      onClick={async () => {
                        console.log(chainId)
                        library.currentProvider.send({
                          method: 'metamask_watchAsset',
                          params: {
                            "type": "ERC20",
                            "options": {
                              "address": getvEVOTokenAddress(),
                              "symbol": `EVO${isDevMode ? ' (Test)' : ''}`,
                              "decimals": 18,
                              "image": "https://evoverses.com/logo192.png",
                            },
                          },
                          id: Math.round(Math.random() * 100000),
                        }, (err, added) => {
                          console.log('provider returned', err, added)
                          if (err || 'error' in added) {
                            console.log("Error adding the token", err, added);
                            toast({
                              title: 'Error adding EVO token to the wallet',
                              description: "Try again later and if you still are not able to, contact us on our Discord.",
                              status: 'error',
                              duration: 9000,
                              isClosable: true,
                            });
                          } else {
                            toast({
                              title: 'Succesfully added the EVO token to the wallet',
                              status: 'success',
                              duration: 4000,
                              isClosable: true,
                            });
                          }
                        })
                      }}
                    >
                      🌀 Add EVO token to MetaMask
                    </Button>
                  )}
                  {active && (
                    <Button
                      variant={'solid'}
                      backgroundColor={'red.600'}
                      size={'md'}
                      borderRadius={20}
                      px={5}
                      color="white"
                      onClick={disconnect}
                    >
                      Disconnect
                    </Button>
                  )}
                </Stack>
              )
            }
            <Text
              mt={7}
              textAlign={"center"}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: 600,
                textAlign: "center",
                paddingLeft: 20,
                paddingRight: 20,
                fontStyle: 'italic',
                color: '#c1c1c1'
              }}
            >
              Read more about how it will work <Link as={LinkNext}
            href=""><span className="link" style={{color: "#DE961A"}}>here</span></Link> or join our Discord <Link as={LinkNext}
            href="https://evoverses.com/discord"><span className="link" style={{color: "#DE961A"}}>here</span></Link> for any questions!
            </Text>
          </Box>
        </Box>
      </Stack>
      <LoadingOverlay hide />
    </div>
  );
};

export default Page;
