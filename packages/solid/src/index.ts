export { createClient } from './client'
export type { Client, ClientConfig } from './client'

export { Context, WagmiProvider, useClient } from './context'

export {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useNetwork,
  useSignMessage,
  useSigner,
  useSwitchNetwork,
} from './hooks'

export { publicProvider } from './providers/public'

export {
  AddChainError,
  ChainDoesNotSupportMulticallError,
  ChainMismatchError,
  ChainNotConfiguredError,
  Connector,
  ConnectorAlreadyConnectedError,
  ConnectorNotFoundError,
  ContractMethodDoesNotExistError,
  ContractMethodNoResultError,
  ContractMethodRevertedError,
  ContractResultDecodeError,
  ProviderChainsNotFound,
  ProviderRpcError,
  ResourceUnavailableError,
  RpcError,
  SwitchChainError,
  SwitchChainNotSupportedError,
  UserRejectedRequestError,
  configureChains,
  createStorage,
  deepEqual,
  deserialize,
  erc20ABI,
  erc721ABI,
  erc4626ABI,
  goerli,
  mainnet,
  readContracts,
  serialize,
} from '@wagmi/core'
export type {
  Chain,
  ChainProviderFn,
  ConnectorData,
  ConnectorEvents,
  Storage,
  Unit,
} from '@wagmi/core'

export type { Address } from 'abitype'
