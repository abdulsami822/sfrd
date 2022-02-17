import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/fontawesome-free-brands";

import "./index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="links-container">
          <h1 className="footer-heading">All Links</h1>
          <div className="footer-list-container">
            <ul className="footer-list">
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
            <ul className="footer-list">
              <li>About Rare Diseases</li>
              <li>About Rare Diseases</li>
              <li>About Rare Diseases</li>
              <li>About Rare Diseases</li>
              <li>About Rare Diseases</li>
            </ul>
            <ul className="footer-list">
              <li>Register</li>
              <li>Register</li>
              <li>Register</li>
              <li>Register</li>
            </ul>
          </div>
        </div>
        <div className="footer-logo-content">
          <h1 className="footer-heading">Social</h1>
          <div className="footer-logo-container">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="footer-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-copyright"> &copy; SFRD - 2022</p>
    </footer>
  );
}

export default Footer;
