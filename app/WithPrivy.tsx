'use client'
import { PrivyProvider, useWallets } from '@privy-io/react-auth'
import {  mainnet } from 'viem/chains'

export default function WithPrivvy({
    children
}: {
    children: React.ReactNode | React.ReactNode[]
}) {
    return (
        <PrivyProvider
            appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
            config={{
                appearance: {
                    theme: 'dark'
                },
                embeddedWallets: {
                    createOnLogin: 'users-without-wallets',
                    noPromptOnSignature: true
                },
                defaultChain: mainnet,
                supportedChains: [mainnet]
            }}
        >
            {children}
        </PrivyProvider>
    )
}

