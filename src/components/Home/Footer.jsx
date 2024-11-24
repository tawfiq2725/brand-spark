// Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaGlobe, FaTiktok } from "react-icons/fa";
import "./Footer.css";
import backgroundImage from "/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-overlay">
        <img
          src={backgroundImage}
          alt="Background"
          className="background-image"
        />
      </div>
      <div className="footer-content">
        <div className="footer-left">
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaGlobe />
            <FaTiktok />
          </div>
          <p>Or email us at:</p>
          <p>youremail@mail.com</p>
        </div>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-right">
          <p>Office</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>+1 (999) - 000 - 000</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
