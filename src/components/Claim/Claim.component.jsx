import React, { useState } from "react";
import contract from "../../contract";
import { Web3Provider } from "@ethersproject/providers";
import "./Claim.styles.css";

function Claim() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask to use this app!");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
    } catch (error) {
      console.error("Failed to connect to MetaMask:", error);
    }
  };

  const handleClaim = async () => {
    if (!address) {
      alert("Please connect your wallet first!");
      return;
    }

    setLoading(true);
    try {
      const signer = new Web3Provider(window.ethereum).getSigner();
      const connectedContract = contract.connect(signer);
      const tx = await connectedContract.claim();
      await tx.wait();
      const result = await connectedContract.totalClaimed();
      setData(result.toString());
    } catch (error) {
      console.error("Error in claiming tokens:", error);
    }
    setLoading(false);
  };

  return (
    <div className="claim">
      <div className="claim-address">
        {address ? (
          <p>Connected address: {address}</p>
        ) : (
          <button onClick={connectWallet} className="connect-button">
            Connect Wallet
          </button>
        )}
      </div>
      <p>Total claimed tokens: {data}</p>
      <button onClick={handleClaim} className="claim-button" disabled={loading}>
        {loading ? "Claiming..." : "Claim Tokens"}
      </button>
    </div>
  );
}

export default Claim;
