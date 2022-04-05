// @ts-nocheck
import { Box, Stack, useToast, Heading, Text, Image, Button, Spinner } from "@chakra-ui/react";
import Nav from "../components/Nav/Nav";
import React, { useEffect, useState } from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import Countdown from "react-countdown";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../components/wallet/connectors"
import { isDevMode, getChainID } from "../config";

import claimVEvoToken from "../contracts/claimVEvoToken";


const PUBLIC_SALE_ENDS_DATE = new Date(1649088000 * 1000);

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

let EVENT_OPTIONS = {
  filter: {
    //value: ['1000', '1337']    //Only get events where transfer value was 1000 or 1337
  },
  fromBlock: 0,                  //Number || "earliest" || "pending" || "latest"
  toBlock: 'latest'
};


const Page = () => {
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
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

  const claimTokens = async () => {
    if (account && parseInt(claimableTokens) > 0) {
      try {
        setLoading(true);
        const _result = await claimVEvoToken(library).methods.claim().send({ from: account });
        console.log("Tx result", _result);
        if (_result.status) {
          setClaimableTokens("0");
        }
        toast({
          title: 'Succesfully claimed your vEVO tokens',
          description: "Remeber to add ",
          status: 'success',
          duration: 40000,
          isClosable: false,
        });
      } catch (err) {
        console.log("Claim Error", err);
        toast({
          title: 'Error claiming your vEVO tokens',
          description: "Try again later and if you still are not able to, contact us on our Discord.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
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

  useEffect(() => {
    const getClaimableAmount = async () => {
      const _amountObj = await claimVEvoToken(library).methods.userClaimable("0xd96282380599B55d4CF3e4CED0601f4dAB5d912b").call({ from: account });
      const _amount = _amountObj?.amount;
      const strAmount = _parseClaimableAmount(_amount);
      console.log(await claimVEvoToken(library).methods.userClaimable("0xd96282380599B55d4CF3e4CED0601f4dAB5d912b").call({ from: account }))
      //console.log(await claimVEvoToken(library).methods.claim().send({from: account}))
      //console.log(await claimVEvoToken(library).methods.userClaimable("0xd96282380599B55d4CF3e4CED0601f4dAB5d912b").call({from: account}))
      setClaimableTokens(strAmount);
    }
    if (account) {
      getClaimableAmount();
    }
  }, [account]);

  useEffect(() => {
    if (account) {
      claimVEvoToken(library).events.UserClaimedTokens(EVENT_OPTIONS)
        .on('data', event => console.log("Data", event))
        .on('changed', changed => console.log("Changed", changed))
        .on('error', err => console.log("Error", err))
        .on('connected', str => console.log("Connected", str));

      claimVEvoToken(library).events.UpdateTotalClaimedTokens(EVENT_OPTIONS)
        .on('data', event => console.log("Data1", event))
        .on('changed', changed => console.log("Changed1", changed))
        .on('error', err => console.log("Error1", err))
        .on('connected', str => console.log("Connected1", str));
    }
  }, [account]);

  const _parseClaimableAmount = str => {
    return str && str.length > 18 ? str.slice(0, -18) : "0"
  }


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
            <Image boxSize={"150px"} src={"./loading.gif"} />
            <Heading
              mt={6}
              mb={3}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: 700,
                textAlign: "center",
                paddingLeft: 20,
                paddingRight: 20,
                lineHeight: 1.8,
                fontSize: "1.4rem",
              }}
            >
              {
                active ? `Connected as ${account}` :
                  ``
              }
            </Heading>
            {
              active && (
                <Heading
                  mt={0}
                  mb={8}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: 700,
                    textAlign: "center",
                    paddingLeft: 20,
                    paddingRight: 20,
                    lineHeight: 1.8,
                    fontSize: "1.4rem",
                  }}
                >
                  You have <span style={{ color: '#DE961A' }}>{claimableTokens} vEVO</span> tokens to claim!
                </Heading>
              )
            }
            {
              isLoading && (
                <Spinner mb={5} mt={-3} color='#DE961A' />
              )
            }
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
            {
              active && (
                <Stack direction='row' spacing={4}>
                  {parseInt(claimableTokens) > 0 && (
                    <Button
                      variant={'solid'}
                      backgroundColor={isLoading === false ? '#DE961A' : '#adadad'}
                      size={'md'}
                      borderRadius={20}
                      px={5}
                      color="white"
                      onClick={claimTokens}
                    >
                      🌀 Claim your {claimableTokens} vEVO!
                    </Button>
                  )
                  }
                  <Button
                      variant={'solid'}
                      backgroundColor={'#DE961A'}
                      size={'md'}
                      borderRadius={20}
                      px={5}
                      color="white"
                      onClick={() => {
                        connector.sendAsync({
                          method: 'metamask_watchAsset',
                          params: {
                            "type": "ERC20",
                            "options": {
                              "address": tokenAddress,
                              "symbol": tokenSymbol,
                              "decimals": tokenDecimals,
                              "image": tokenImage,
                            },
                          },
                          id: Math.round(Math.random() * 100000),
                        }, (err, added) => {
                          console.log('provider returned', err, added)
                          if (err || 'error' in added) {
                            return
                          }
                        })
                      }}
                    >
                      🌀 Add vEVO token to MetaMask
                    </Button>
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
                </Stack>
              )
            }
          </Box>
        </Box>
      </Stack>
      <LoadingOverlay hide />
    </div>
  );
};

export default Page;
