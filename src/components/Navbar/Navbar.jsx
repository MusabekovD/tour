import React, { useState } from "react";
import "./Navbar.css";
import "./MediaQuery.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <div className="logo">
            <img src="	https://zamontour.uz/assets/images/zamon.svg" alt="" />
          </div>
          <ul className="nav__list">
            <li className="nav__list-item">
              <a href="#">Home</a>
            </li>
            <li className="nav__list-item">
              <a href="#">About</a>
            </li>
            <li className="nav__list-item">
              <a href="#">Tour</a>
            </li>
            <li className="nav__list-item">
              <a href="#">Contacts</a>
            </li>

          </ul>
          <div className="nav__icons nav__list">
            <li className="nav__icons-item nav__list-item ">
              <a href="#">Uz</a>
            </li>
            <li className="nav__icons-item nav__list-item ">
              <a href="#">Ru</a>
            </li>
            <li className="nav__icons-item nav__list-item ">
              <a href="#">Eng</a>
            </li>
            <li className="nav__icons-item nav__list-item ">
              <a href="#">
                <FaTelegramPlane />
              </a>
            </li>
            <li className="nav__icons-item nav__list-item ">
              <a href="#">
                <FaInstagram className="social_icon" />
              </a>
            </li>
          </div>
          <div className={`mobileNavbar ${isOpen ? "active" : ""} `}>
            <ul className="mobileNavbar__list">
              <li className="mobileNavbar__list-item">
                <a href="#">Home</a>
              </li>
              <li className="mobileNavbar__list-item">
                <a href="#">About</a>
              </li>
              <li className="mobileNavbar__list-item">
                <a href="#">Tour</a>
              </li>
              <li className="mobileNavbar__list-item">
                <a href="#">Contacts</a>
              </li>
              <li className="mobileNavbar__list-item">
                <a href="#">Uz</a>
              </li>
              <li className="mobileNavbar__list-item">
                <a href="#">Eng</a>
              </li>
              <li className="mobileNavbar__list-item">
                <a href="#">Ru</a>
              </li>
              <li className="mobileNavbar__list-item">
                <FaTelegramPlane className="social_icon" />
              </li>
              <li className="mobileNavbar__list-item">
                <FaInstagram className="social_icon" />
              </li>
            </ul>
          </div>
          <div className="navbar__toggle" onClick={toggleNavbar}>
            {
              isOpen ?
              <MdOutlineClose className="social_icon" /> :
              <GiHamburgerMenu className="social_icon" /> 
            }
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
