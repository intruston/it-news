import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import white from "./white.svg";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  return (
    <header>
      <Link to="/">
        <img className="logo" src={white} alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li className="nav-item">
            <button className="search-button" onClick={toggleSearch}>Search</button>
          </li>
          <li className="nav-item">
            <Link to="/newsfeed" className="nav-link">News Feed</Link>
          </li>
          <li className="nav-item">
            <Link to="https://www.hackyourfuture.net/donate" target="_blank" className="nav-link">
              Support
            </Link>
          </li>
        </ul>
      </nav>
      {searchOpen && (
        <div className="search-container">
          <Search />
          <button className="close-button" onClick={closeSearch}>
            x
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;