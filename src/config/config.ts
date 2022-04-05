import { ChainId } from "@thirdweb-dev/react";

export const GTM_ID = 'GTM-M2BWXLW';
const DEV = true;

export const isDevMode = () => DEV;
export const getChainID = () => DEV ? ChainId.HarmonyTestnet : ChainId.Harmony;