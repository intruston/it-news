import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="nav-item">
            <Link to="/newsfeed" className="nav-link">
              News Feed
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/newsfeed" className="nav-link">
              News Feed
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="https://www.hackyourfuture.net/donate"
              target="_blank"
              className="nav-link"
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Footer;
