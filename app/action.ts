import { mainnet } from "viem/chains";
import { ConnectedWallet } from "@privy-io/react-auth";
import {
  createWalletClient,
  custom,
  encodeFunctionData,
  erc20Abi,
  parseGwei,
} from "viem";

export const USDC_CONTRACT = {
  mainnet: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  base: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
};

export async function runTx(wallet: ConnectedWallet) {
  await wallet.switchChain(mainnet.id);

  let provider = await wallet.getEthersProvider();
  console.log("provider", provider);

  let walletClient = createWalletClient({
    account: wallet.address as `0x${string}`,
    chain: mainnet,
    transport: custom(await wallet.getEthereumProvider()),
  });

  try {
    const data = encodeFunctionData({
      abi: erc20Abi,
      functionName: "approve",
      args: [wallet.address as `0x${string}`, BigInt(1)],
    });

    const txRequest = await walletClient.prepareTransactionRequest({
      chain: mainnet,
      account: wallet.address as `0x${string}`,
      to: USDC_CONTRACT.mainnet as `0x${string}`,
      data,
      maxPriorityFeePerGas: parseGwei("20"),
    });

    // this fails with:
    // `Error: unsupported transaction type: 0x2 (operation="serializeTransaction", transactionType="0x2", code=UNSUPPORTED_OPERATION, version=transactions/5.7.0)` on eth_signTransaction
    let signedTx = await walletClient.signTransaction(txRequest);

    console.log("signed tx", signedTx);
  } catch (error) {
    console.log("failed with", error);
  }
}
