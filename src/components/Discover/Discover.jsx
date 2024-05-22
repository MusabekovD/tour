import React from "react";
import "./Discover.css";
import "./DiscoverQuery.css";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
const Discover = () => {
  return (
    <section className="discover__main">
      <div className="discover">
        <div className="container">
          <div className="discover__content">
            <p className="discover__subtitle">Book Prefered Deal Here</p>
            <h2 className="discover__title">Make Your Reservation</h2>
            <button className="discover__btn btn">Discover Me</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="discover__cards">
          <div className="disover__card">
            <div className="discover__card-icon">
              <FaPhoneAlt className="discover__icon" />
            </div>
            <h3 className="discover__title">Make a Phone Call</h3>
            <p className="discover__number">+998 12154485</p>
          </div>
          <div className="disover__card">
            <div className="discover__card-icon">
              <MdEmail className="discover__icon" />
            </div>
            <h3 className="discover__title">Contact Us via Email</h3>
            <p className="discover__number">example@gmail.com</p>
          </div>
          <div className="disover__card">
            <div className="discover__card-icon">
              <FaLocationArrow className="discover__icon" />
            </div>
            <h3 className="discover__title">Make a Phone Call</h3>
            <p className="discover__number">+998 12154485</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
