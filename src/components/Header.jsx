import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../components/images/bizverse-case-study-logo.567f4036f90cf1d8c5e3b6b91836c52a16cb38d6.png";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ backgroundColor: 'rgb(9, 3, 55)' }}
    >
      <div className="container">
        <img src={image1} alt="Logo" style={{ height: "80px" }} />
        <button
          className="navbar-toggler bg-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-danger"
                to="/Booking"
                style={{ marginLeft: "10px" }}
              >
                Booking
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
