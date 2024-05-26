import React, { useState } from "react";
import "./Navbar.css";
import "./MediaQuery.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Explore from "../Explore/Explore";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.innerText.toLowerCase());
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <div className="logo">
            <a href="#">
              <img src="https://zamontour.uz/assets/images/zamon.svg" alt="" />
            </a>
          </div>
          <ul className="nav__list">
            <li className="nav__list-item" >
              <a href="/">{t("home")}</a>
            </li>
            <li className="nav__list-item" >
              <a href="#about">{t("about")}</a>
            </li>
            <li className="nav__list-item" >
              <a href="#offer">{t("tour")}</a>
            </li>
            <li className="nav__list-item" >
              <a href="#contacts">{t("contacts")}</a>
            </li>
          </ul>
          <div className="nav__icons nav__list">
            <li className="nav__icons-item nav__list-item ">
              <a onClick={handleChangeLanguage} href="#">
                Uz
              </a>
            </li>
            <li className="nav__icons-item nav__list-item ">
              <a onClick={handleChangeLanguage} href="#">
                Ru
              </a>
            </li>
            <li className="nav__icons-item nav__list-item ">
              <a onClick={handleChangeLanguage} href="#">
                Eng
              </a>
            </li>
            <li className="nav__icons-item nav__list-item ">
              <a href="#">
                <FaTelegramPlane className="social_icon" />
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
              <li className="mobileNavbar__list-item" onClick={closeNavbar}>
                <a href="/">{t("home")}</a>
              </li>
              <li className="mobileNavbar__list-item" onClick={closeNavbar}>
                <a href="#about">{t("about")}</a>
              </li>
              <li className="mobileNavbar__list-item" onClick={closeNavbar}>
                <a href="#offer">{t("tour")}</a>
              </li>
              <li className="mobileNavbar__list-item" onClick={closeNavbar}>
                <a href="#contacts">{t("contacts")}</a>
              </li>
              <li className="mobileNavbar__list-item" onClick={closeNavbar}>
                <a onClick={handleChangeLanguage} href="#">
                  Uz
                </a>
              </li>
              <li className="mobileNavbar__list-item" onClick={closeNavbar}>
                <a onClick={handleChangeLanguage} href="#">
                  Eng
                </a>
              </li>
              <li className="mobileNavbar__list-item" onClick={closeNavbar}>
                <a onClick={handleChangeLanguage} href="#">
                  Ru
                </a>
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
            {isOpen ? (
              <MdOutlineClose className="social_icon" />
            ) : (
              <GiHamburgerMenu className="social_icon" />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
