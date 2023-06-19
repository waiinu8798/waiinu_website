import React from "react";
import { FaTwitter } from "react-icons/fa";
import { ReactComponent as CustomIcon } from "./etherscan-logo-circle.svg";
import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} WAIINU. All rights reserved.
      </div>
      <div className="footer-social">
        <a
          href="https://twitter.com/waiinu_arb"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="twitter-icon" />
        </a>
        <a
          href="https://arbiscan.io/token/0x8b0a85818cb77a89ac5e6ce1a54797419d70dec4"
          target="_blank"
          rel="noreferrer"
        >
          <CustomIcon className="custom-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
