import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">WAIINU</div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>{" "}
            {/* If you have an AboutPage component, add this link */}
          </li>
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
