import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import CategoriesMenu from "./CategoriesMenu";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar-container web-navbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              <Logo />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav w-100 d-flex justify-content-between">
                <SearchBar />
                <CartIcon />
              </ul>
            </div>
          </div>
        </nav>
        <CategoriesMenu />
      </div>

      {/* Mobil için navbar */}
      <div className="navbar-container mobile-navbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              <Logo />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavMobile"
              aria-controls="navbarNavMobile"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarNavMobile"
            >
              <CategoriesMenu />
            </div>
          </div>
        </nav>

        <div className="mobile-navbar-fixed">
          <ul className="navbar-nav">
            <li>
              <SearchBar className="search-bar" />
            </li>
            <li>
              <CartIcon className="cart-icon" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
