import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Weather App</h1>
      <p className="header__info">Search for a city or locate yourself!</p>
    </header>
  );
}

export default Header;
