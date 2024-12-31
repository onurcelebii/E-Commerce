import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row">
          {/* Hakkımızda */}
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>
              Our e-commerce site aims to offer you the best products at the
              most affordable prices. You can contact us for more information.
            </p>
          </div>
          {/* Kategoriler */}
          <div className="col-md-3">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/category/men's%20clothing"
                  className="text-white text-decoration-none"
                >
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link
                  to="/category/jewelery"
                  className="text-white text-decoration-none"
                >
                  Jewelery
                </Link>
              </li>
              <li>
                <Link
                  to="/category/electronics"
                  className="text-white text-decoration-none"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/category/women's%20clothing"
                  className="text-white text-decoration-none"
                >
                  Women's Clothing
                </Link>
              </li>
            </ul>
          </div>
          {/* İletişim */}
          <div className="col-md-3">
            <h5>Communication</h5>
            <p>
              Address: Istanbul, Türkiye <br />
              Phone: +90 555 555 55 55 <br />
              Email: info@eticaret.com
            </p>
          </div>
          {/* Sosyal Medya */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-3 bg-secondary">
        <p className="mb-0">© 2024 E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
