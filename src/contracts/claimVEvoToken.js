import { getWeb3 } from "../web3";
import { isDevMode } from '../config';

import _testnet from '../abis/testnet/claimVEvoToken.json';
import _mainnet from '../abis/mainnet/claimVEvoToken.json';

const address = isDevMode ? "0x8229190ada4a39cb7be14d6ff60f43029852adde" : "0x7a82dab3c5e53895ED080307Db8d1e1b8B903A79";

const abi = isDevMode ? _testnet.abi : _mainnet.abi;

const contract = (web3) => {
    if (web3) {
        const _c = new web3.eth.Contract(abi, address);
        return _c;
    }

    return undefined;
}

// @ts-ignore
export default contract;