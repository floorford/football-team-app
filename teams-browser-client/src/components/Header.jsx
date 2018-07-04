import React from "react";
import '../index.css';

const Header = ({ children }) => (
  <header className="header">
    <h1>
      { children }
    </h1>
    <h6>Add as many players as you like and create your dream team</h6>
  </header>
);

export default Header;
