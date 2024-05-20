import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo"></div>
            <ul className="nav__list">
                <li className="nav__list-item"></li>
                <li className="nav__list-item"></li>
                <li className="nav__list-item"></li>
                <li className="nav__list-item"></li>
            </ul>
            <div className="nav__icons">
            <li className="nav__icons-item"></li>
            <li className="nav__icons-item"></li>
            <li className="nav__icons-item"></li>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
