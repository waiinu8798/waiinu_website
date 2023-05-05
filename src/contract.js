import provider from "./ethereum";
import { ethers } from "ethers";

import contractAbi from "./contractAbi.json";
import contractAddress from "./contractAddress";

const contract = new ethers.Contract(
  contractAddress,
  contractAbi,
  provider.getSigner()
);

export default contract;
