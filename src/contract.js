import provider from "./ethereum";
import { ethers } from "ethers";

import contractAbi from "./contractAbi.json";
import contractAddress from "./contractAddress";

let contract;

if (provider.getSigner) {
  contract = new ethers.Contract(
    contractAddress,
    contractAbi,
    provider.getSigner()
  );
} else {
  // Create a read-only contract instance if the provider doesn't have a signer
  contract = new ethers.Contract(contractAddress, contractAbi, provider);
}

export default contract;
