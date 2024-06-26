import React, { useEffect, useRef } from "react";
import "./Hero.css";
import "./HeroQuery.css";

import { FaUser } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import Typed from "typed.js";
const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        Autoplay={true}
        className="hero"
      >
        <SwiperSlide>
          <section className="hero hero-1" id="hero">
            <div className="container hero__container">
              <div className="hero__main">
                <div className="hero__text">
                  <p className="hero__text-subtitle">{t("hero_desc")}</p>
                  <h2 className="hero__text-title">{t("hero_title_first")}</h2>
                  <button className="btn hero__text-btn ">
                    <a href="#about">{t("go_there")}</a>
                  </button>
                </div>
                <div className="hero__info">
                  <div className="hero__population hero__info-flex">
                    <div className="hero__icon hero__icons-hover">
                      <a href="#">
                        <FaUser />
                      </a>
                    </div>
                    <div className="hero__txt">
                      {t("population")} <br /> <span>8.66 M</span>
                    </div>
                  </div>
                  <div className="hero__territory hero__info-flex">
                    <div className="hero__icon hero__icons-hover">
                      <a href="#">
                        <FaEarthAfrica />
                      </a>
                    </div>
                    <div className="hero__txt">
                      {t("territory")} <br /> <span>41.290 KM2</span>
                    </div>
                  </div>
                  <div className="hero__price hero__info-flex">
                    <div className="hero__icon hero__icons-hover">
                      <a href="#">
                        <IoMdHome />
                      </a>
                    </div>
                    <div className="hero__txt">
                      {t("price")} <br /> <span>$1.100.200 </span>
                    </div>
                  </div>
                  <div className="btn">
                    <a href="#about">{t("explore")}</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="hero hero-2" id="hero">
            <div className="container hero__container">
              <div className="hero__main">
                <div className="hero__text">
                  <p className="hero__text-subtitle">{t("hero_desc")}</p>
                  <h2 className="hero__text-title">{t("hero_title_second")}</h2>
                  <div className="hero__text-btn btn">
                    <a href="#about">{t("about")}</a>
                  </div>
                </div>
                <div className="hero__info">
                  <div className="hero__population hero__info-flex">
                    <div className="hero__icon hero__icons-hover">
                      <a href="#">
                        <FaUser />
                      </a>
                    </div>
                    <div className="hero__txt">
                      {t("population")} <br /> <span>8.66 M</span>
                    </div>
                  </div>
                  <div className="hero__territory hero__info-flex">
                    <div className="hero__icon hero__icons-hover">
                      <a href="#">
                        <FaEarthAfrica />
                      </a>
                    </div>
                    <div className="hero__txt">
                      {t("territory")} <br /> <span>41.290 KM2</span>
                    </div>
                  </div>
                  <div className="hero__price hero__info-flex">
                    <div className="hero__icon hero__icons-hover">
                      <a href="#">
                        <IoMdHome />
                      </a>
                    </div>
                    <div className="hero__txt">
                      {t("price")} <br /> <span>$1.100.200 </span>
                    </div>
                  </div>
                  <div className="btn">
                    <a href="#about">{t("explore")}</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            className="hero hero-3"
            style={{
              backgroundPosition: "center",
            }}
            id="hero"
          >
            <div className="container hero__container">
              <div className="hero__main">
                <div className="hero__text">
                  <p className="hero__text-subtitle">{t("hero_desc")}</p>
                  <h2 className="hero__text-title"> {t("hero_title_third")}</h2>
                  <div className="hero__text-btn btn">
                    <a href="#about">{t("about")}</a>
                  </div>
                </div>
                <div className="hero__info">
                  <div className="hero__population hero__info-flex">
                    <div className="hero__icon hero__icons-hover">
                      <a href="#">
                        <FaUser />
                      </a>
                    </div>
                    <div className="hero__txt">
                      {t("population")} <br />
                      <span className="hero__txt-span">8.66 M</span>
                    </div>
                  </div>
                  <div className="hero__territory hero__info-flex">
                    <div className="hero__icon hero__icons-hover">
                      <a href="#">
                        <FaEarthAfrica />
                      </a>
                    </div>
                    <div className="hero__txt">
                      {t("territory")} <br /> <span>41.290 KM2</span>
                    </div>
                  </div>
                  <div className="hero__price hero__info-flex">
                    <div className="hero__icon hero__icons-hover">
                      <a href="#">
                        <IoMdHome />
                      </a>
                    </div>
                    <div className="hero__txt">
                      {t("price")} <br /> <span>$1.100.200 </span>
                    </div>
                  </div>
                  <div className="btn">
                    <a href="#about">{t("explore")}</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
