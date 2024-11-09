import React, { useState } from "react";
import logo from "/logo.png";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header px-14 flex justify-between items-center gap-6">
      <img src={logo} className="w-20" alt="logo" />

      {/* Burger and close icon */}
      <div className="icon-button md:hidden " onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Nav items */}
      <ul
        className={`nav-menu ${isOpen ? "block" : ""} md:flex text-sm gap-10`}
      >
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
