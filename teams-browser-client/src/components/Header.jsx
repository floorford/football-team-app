import React from "react";

const Header = ({ children }) => (
  <header>
    <h1 style={{ textAlign: "center" }}>
      { children }
    </h1>
  </header>
);

export default Header;
