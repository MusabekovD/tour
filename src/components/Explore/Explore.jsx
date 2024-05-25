import React from "react";
import "./Explore.css";
import "./ExploreQuery.css";
import img1 from "../../assets/explore/1.jpg";
import img2 from "../../assets/explore/2.jpg";
import img3 from "../../assets/explore/3.jpg";
import img4 from "../../assets/explore/4.jpg";
import img5 from "../../assets/explore/5.jpg";
import img6 from "../../assets/explore/6.jpg";
import { useTranslation } from "react-i18next";

import { FaUser } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
const Explore = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="explore container" id="about">
        <div className="container">
          <div className="header__text">
            <div className="header__title"> {t("explore_title")}</div>
            <div className="header__subtitle">{t("explore_desc")}</div>
          </div>
          <div className="expore__contents">
            <div className="explore__img">
              <img src={img1} alt="" />
            </div>
            <div className="explore__info">
              <div className="explore__header">
                <div className="explore__header-text">
                  <h5> {t("explore1.title")}</h5>
                  <p> {t("explore1.small")}</p>
                </div>
                <div className="explore__header-btn btn">
                  <a href="#locations">{t("explore")}</a>
                </div>
              </div>
              <p className="explore__body">{t("explore1.desc")}</p>
            </div>
          </div>
          <div className="expore__contents">
            <div className="explore__img ">
              <img src={img2} alt="" />
            </div>
            <div className="explore__info">
              <div className="explore__header">
                <div className="explore__header-text">
                  <h5> {t("explore2.title")}</h5>
                  <p> {t("explore2.small")}</p>
                </div>
                <div className="explore__header-btn btn">
                  <a href="#locations">{t("explore")}</a>
                </div>
              </div>
              <p className="explore__body">{t("explore2.desc")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="explore explore__2nd container">
        <div className="container">
          <div className="header__text">
            <div className="header__title">{t("country_title")}</div>
            <div className="header__subtitle">{t("country_desc")}</div>
          </div>
          <div className="container">
            <div className="expore__contents ">
              <div className="explore__img">
                <img src={img3} alt="" />
              </div>
              <div className="explore__info">
                <div className="explore__header">
                  <div className="explore__header-text">
                    <h5>{t("country1.title")}</h5>
                    <p>{t("country1.country")}</p>
                  </div>
                  <div className="explore__header-btn btn">
                    <a href="#locations">{t("explore")}</a>
                  </div>
                </div>
                <p className="explore__body">{t("country1.desc")}</p>
                <div className="explore__info-extra">
                  <div className="explore__extra-population flex">
                    <FaUser className="explore__icon" />
                    <p className="extra__txt">45{t("country_people")}</p>
                  </div>
                  <div className="explore__extra-space flex">
                    <FaEarthAsia className="explore__icon" />
                    <p className="extra__txt">123000{t("country_km")}</p>
                  </div>
                  <div className="explore__extra-price flex">
                    <FaHouse className="explore__icon" />
                    <p className="extra__txt">{t("country_link")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="expore__contents ">
              <div className="explore__img">
                <img src={img4} alt="" />
              </div>
              <div className="explore__info">
                <div className="explore__header">
                  <div className="explore__header-text">
                    <h5>{t("country2.title")}</h5>
                    <p>{t("country2.country")}</p>
                  </div>
                  <div className="explore__header-btn btn">
                    <a href="#locations">{t("explore")}</a>
                  </div>
                </div>
                <p className="explore__body">{t("country2.desc")}</p>
                <div className="explore__info-extra">
                  <div className="explore__extra-population flex">
                    <FaUser className="explore__icon" />
                    <p className="extra__txt"> 30 {t("country_people")}</p>
                  </div>
                  <div className="explore__extra-space flex">
                    <FaEarthAsia className="explore__icon" />
                    <p className="extra__txt">1800000{t("country_km")}</p>
                  </div>
                  <div className="explore__extra-price flex">
                    <FaHouse className="explore__icon" />
                    <p className="extra__txt">{t("country_link")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="expore__contents ">
              <div className="explore__img">
                <img src={img5} alt="" />
              </div>
              <div className="explore__info">
                <div className="explore__header">
                  <div className="explore__header-text">
                    <h5>{t("country3.title")}</h5>
                    <p>{t("country3.country")}</p>
                  </div>
                  <div className="explore__header-btn btn">
                    <a href="#locations">{t("explore")}</a>
                  </div>
                </div>
                <p className="explore__body">{t("country3.desc")}</p>
                <div className="explore__info-extra">
                  <div className="explore__extra-population flex">
                    <FaUser className="explore__icon" />
                    <p className="extra__txt">65{t("country_people")}</p>
                  </div>
                  <div className="explore__extra-space flex">
                    <FaEarthAsia className="explore__icon" />
                    <p className="extra__txt">123444{t("country_km")}</p>
                  </div>
                  <div className="explore__extra-price flex">
                    <FaHouse className="explore__icon" />
                    <p className="extra__txt">{t("country_link")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="expore__contents ">
              <div className="explore__img">
                <img src={img6} alt="" />
              </div>
              <div className="explore__info">
                <div className="explore__header">
                  <div className="explore__header-text">
                    <h5>{t("country4.title")}</h5>
                    <p>{t("country4.country")}</p>
                  </div>
                  <div className="explore__header-btn btn">
                    <a href="#locations">{t("explore")}</a>
                  </div>
                </div>
                <p className="explore__body">{t("country4.desc")}</p>
                <div className="explore__info-extra">
                  <div className="explore__extra-population flex">
                    <FaUser className="explore__icon" />
                    <p className="extra__txt">102{t("country_people")}</p>
                  </div>
                  <div className="explore__extra-space flex">
                    <FaEarthAsia className="explore__icon" />
                    <p className="extra__txt">123444{t("country_km")}</p>
                  </div>
                  <div className="explore__extra-price flex">
                    <FaHouse className="explore__icon" />
                    <p className="extra__txt">{t("country_link")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
