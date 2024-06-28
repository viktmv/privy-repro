'use client' 

import { useWallets } from "@privy-io/react-auth";
import { runTx } from './action'

export function Component() {
  let { wallets } = useWallets();
  let wallet = wallets.find((wallet) => wallet.walletClientType === "privy");

  if (!wallet) return null;

  const transact = () => runTx(wallet);

  return (
    <button
      type="button"
      onClick={transact}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Run
    </button>
  );
}
