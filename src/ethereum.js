import { Web3Provider } from "@ethersproject/providers";

let provider;

if (window.ethereum) {
  provider = new Web3Provider(window.ethereum);
} else {
  // Use a default provider if MetaMask or other wallet isn't available
  provider = new Web3Provider.providers.getDefaultProvider("mainnet");
}

export default provider;
