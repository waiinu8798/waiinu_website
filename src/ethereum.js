import { Web3Provider, getDefaultProvider } from "@ethersproject/providers";

let provider;

if (window.ethereum) {
  provider = new Web3Provider(window.ethereum);
} else {
  // Use a default provider if MetaMask or other wallet isn't available
  provider = getDefaultProvider("mainnet");
}

export default provider;
