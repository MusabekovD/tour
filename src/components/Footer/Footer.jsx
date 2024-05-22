import React from "react";
import "./Footer.css";
import "./FooterQuery.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__text">
            <h5 className="footer__text-title">ARE YOU LOOKING TO TRAVEL ?</h5>
            <p className="footer__text-subtitle">
              Make A Reservation By Clicking The Button
            </p>
          </div>
          <div className="footer__btn btn">
            <a href="#">Book Yours Now</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;
