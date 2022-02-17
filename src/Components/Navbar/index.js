import React from "react";
import { Link } from "react-router-dom";

import logo from "./../../Images/logo.png";

import "./index.css";

function Navbar() {
  return (
    <nav className="navbar app-content">
      <Link to="/">
        <li className="nav-item">Homepage</li>
      </Link>
      <Link to="/services">
        <li className="nav-item">Services</li>
      </Link>
      <Link to="/getinvolved">
        <li className="nav-item">Get Involved</li>
      </Link>
      <img
        src={logo}
        className="nav-logo"
        alt="Saba Foundation for Rare Diseases"
      />

      <Link to="/faqs">
        <li className="nav-item">FAQs</li>
      </Link>
      <Link to="/aboutus">
        <li className="nav-item">About Us</li>
      </Link>
      <Link to="/contactus">
        <li className="nav-item nav-button">Contact Us</li>
      </Link>
    </nav>
  );
}

export default Navbar;
