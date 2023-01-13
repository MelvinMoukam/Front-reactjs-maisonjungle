import React from "react";
import "../../styles/Header.css";
import logo from "../../assets/logo.png";

function Header(): JSX.Element {
  const title = "La maison jungle";
  return (
    <div className="lmj-banner">
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <h1 className="lmj-title">{title}</h1>
    </div>
  );
}

export default Header;
