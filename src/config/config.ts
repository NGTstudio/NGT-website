export const GTM_ID = 'GTM-M2BWXLW';
const DEV = true;
const HARMONY_TESTNET = 1666700000;
const HARMONY_MAINNET = 1666600000;

export const isDevMode = () => DEV;
export const getChainID = () => DEV ? HARMONY_TESTNET : HARMONY_MAINNET;