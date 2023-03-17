import React from "react";
import { Link } from "react-router-dom";
import white from "./white.svg";

const Header = () => {
    return (
      <header>
        <img className="logo" src={white} alt="Logo" />
        <nav>
          <ul>
            <li className="nav-item">News Feed</li>
            <li className="nav-item">Search</li>
            <li className="nav-item">Support</li>
          </ul>
        </nav>
      </header>
    );
  };

export default Header;
