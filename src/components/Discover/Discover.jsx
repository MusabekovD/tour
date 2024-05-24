import React from "react";
import "./Discover.css";
import "./DiscoverQuery.css";
import { useTranslation } from "react-i18next";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
const Discover = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="discover__main">
      <div className="discover">
        <div className="container">
          <div className="discover__content">
            <p className="discover__subtitle">{t("book_desc")}</p>
            <h2 className="discover__title">{t("book_title")}</h2>
            <button className="discover__btn btn">{t("book_discover")}</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="discover__cards">
          <div className="disover__card card__scale">
            <div className="discover__card-icon">
              <FaPhoneAlt className="discover__icon" />
            </div>
            <h3 className="discover__title">{t("book_phone")}</h3>
            <p className="discover__number">+998 12154485</p>
          </div>
          <div className="disover__card card__scale">
            <div className="discover__card-icon">
              <MdEmail className="discover__icon" />
            </div>
            <h3 className="discover__title">{t("book_email")}</h3>
            <p className="discover__number">example@gmail.com</p>
          </div>
          <div className="disover__card card__scale">
            <div className="discover__card-icon">
              <FaLocationArrow className="discover__icon" />
            </div>
            <h3 className="discover__title">{t("book_office")}</h3>
            <p className="discover__number">{t("book_map")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
