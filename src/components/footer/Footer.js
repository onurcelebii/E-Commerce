import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-4">
        <div className="row d-flex align-items-center justify-content-between">
          {/* About Us */}
          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase fw-bold">About Us</h6>
            <p className="small">
              Best products at affordable prices. Contact us for more info.
            </p>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase fw-bold">Categories</h6>
            <ul className="list-inline small">
              <li className="list-inline-item me-3">
                <Link to="/category/men's-clothing" className="text-light">
                  Men's
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/category/women's-clothing" className="text-light">
                  Women's
                </Link>
              </li>
              <li className="list-inline-item me-3">
                <Link to="/category/jewelery" className="text-light">
                  Jewelery
                </Link>
              </li>
              <li className="list-inline-item me-3">
                <Link to="/category/electronics" className="text-light">
                  Electronics
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase fw-bold">Follow Us</h6>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-2 bg-secondary">
        <p className="mb-0 small">© 2024 E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
