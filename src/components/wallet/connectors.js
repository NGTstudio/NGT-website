import { InjectedConnector } from '@web3-react/injected-connector'
import { getChainID } from '../../config'

export const injected = new InjectedConnector({
    supportedChainIds: [getChainID()],
})