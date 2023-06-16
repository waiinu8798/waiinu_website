import React from "react";
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
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
