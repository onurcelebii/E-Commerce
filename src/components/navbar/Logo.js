// src/components/navbar/Logo.js
import React from "react";
import logo from "../../assets/logo.png";
import "../../styles/Navbar.css";

const Logo = () => {
  return (
    <div className="navbar-logo-container">
      <img src={logo} alt="E-Commerce" className="navbar-logo" />
      <span className="navbar-logo-text">E-Commerce</span>
    </div>
  );
};

export default Logo;
