// src/components/navbar/Navbar.js
import React from "react";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import CategoriesMenu from "./CategoriesMenu";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Logo bileşenini içe aktar
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <Logo /> {/* Logo bileşenini burada kullan */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 d-flex justify-content-between">
              <SearchBar />
              <CartIcon />
            </ul>
          </div>
        </div>
      </nav>
      <CategoriesMenu />
    </>
  );
};

export default Navbar;
