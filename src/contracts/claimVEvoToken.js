import { getWeb3 } from "../web3";
import { isDevMode } from '../config';

import _testnet from '../abis/testnet/claimVEvoToken.json';

const address = isDevMode ? "0x8229190ada4a39cb7be14d6ff60f43029852adde" : "0x7a82dab3c5e53895ED080307Db8d1e1b8B903A79";

const abi = _testnet.abi;

const contract = (web3) => {
    if (web3) {
        return new web3.eth.Contract(abi, address);
    }

    return undefined;
}

// @ts-ignore
export default contract;