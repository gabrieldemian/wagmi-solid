import { useAccount } from 'wagmi-react'

import { PreviewWrapper } from '../core'
import { Account, WalletSelector } from '../web3'

export function ConnectWallet() {
  const { isConnected } = useAccount()

  if (isConnected)
    return (
      <PreviewWrapper>
        <Account />
      </PreviewWrapper>
    )

  return (
    <PreviewWrapper>
      <WalletSelector />
    </PreviewWrapper>
  )
}
