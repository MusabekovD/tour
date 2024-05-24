import React from "react";
import "./Offer.css";
import "./OfferQuery.css";
import { FaCar } from "react-icons/fa";
import { SiEthiopianairlines } from "react-icons/si";
import { FaBusSimple } from "react-icons/fa6";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
// imgs
import img1 from "../../assets/offer/1.jpg";
import img2 from "../../assets/offer/2.jpg";
import img3 from "../../assets/offer/3.jpg";
import img4 from "../../assets/offer/4.jpg";
import img5 from "../../assets/offer/5.jpg";

import hongkong from "../../assets/hero/hongkong.jpg";
import india from "../../assets/hero/india.jpg";
import china from "../../assets/hero/china.jpg";
import japan from "../../assets/hero/japan.jpg";
import oman from "../../assets/hero/oman.jpg";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Offer = () => {
  // Swiper instance reference
  let example = null;
  let swiperInstance = null;
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="offer" id="offer">
        <div className="container wrapper">
          <div className="header__text">
            <h2 className="header__title">{t("offer_title")}</h2>
            <p className="header__subtitle">{t("offer_desc")}</p>
          </div>
          <div className="offer__slider-cards">
            <Swiper
              modules={[Navigation, Pagination]}
              onSwiper={(swiper) => {
                example = swiper;
              }}
              spaceBetween={200}
              slidesPerView={3}
              loop={true}
              navigation
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 100,
                },
              }}
            >
              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={img1} alt="" />
                    </div>
                    <div className="offer__slide-info card__scale">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          {t("card1.title")} <br />
                          {t("card1.person")}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">{t("deal")}</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> {t("card1.car")}
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          {t("card1.plane")}
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          {t("card1.building")}
                        </div>
                        <div className="offer__body-btn btn">
                          {t("reserve")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={img2} alt="" />
                    </div>
                    <div className="offer__slide-info card__scale">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          {t("card2.title")} <br />
                          {t("card2.person")}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">{t("deal")}</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> {t("card2.car")}
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          {t("card2.plane")}
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          {t("card2.building")}
                        </div>
                        <div className="offer__body-btn btn">
                          {t("reserve")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={img3} alt="" />
                    </div>
                    <div className="offer__slide-info card__scale">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          {t("card3.title")} <br />
                          {t("card3.person")}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">{t("deal")}</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> {t("card3.car")}
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          {t("card3.plane")}
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          {t("card3.building")}
                        </div>
                        <div className="offer__body-btn btn">
                          {t("reserve")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={img4} alt="" />
                    </div>
                    <div className="offer__slide-info card__scale">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          {t("card4.title")} <br />
                          {t("card4.person")}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">{t("deal")}</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> {t("card4.car")}
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          {t("card4.plane")}
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          {t("card4.building")}
                        </div>
                        <div className="offer__body-btn btn">
                          {t("reserve")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={img5} alt="" />
                    </div>
                    <div className="offer__slide-info card__scale">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          {t("card5.title")} <br />
                          {t("card5.person")}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">{t("deal")}</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> {t("card5.car")}
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          {t("card5.plane")}
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          {t("card5.building")}
                        </div>
                        <div className="offer__body-btn btn">
                          {t("reserve")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="offer__slider-icons">
            <div
              className="offer__slider-btn"
              onClick={() => example.slidePrev()}
            >
              <FaArrowCircleLeft />
            </div>
            <div
              className="offer__slider-btn"
              onClick={() => example.slideNext()}
            >
              <FaArrowCircleRight />
            </div>
          </div>
        </div>
      </section>
      <section className="offer">
        <div className="container wrapper">
          <div className="header__text">
            <h2 className="header__title">{t("visa_title")}</h2>
            <p className="header__subtitle">{t("visa_desc")}</p>
          </div>
          <div className=" offer__slider-cards">
            <Swiper
              modules={[Navigation, Pagination]}
              onSwiper={(swiper) => {
                swiperInstance = swiper;
              }}
              spaceBetween={200}
              slidesPerView={3}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 100,
                },
              }}
            >
              <SwiperSlide>
                <div className="offer__slider" >
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={oman} alt="" />
                    </div>
                    <div className="offer__slide-info card__scale" >
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          {t("visa1.title")} <br />
                          {t("visa1.person")}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">{t("deal")}</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> {t("card1.car")}
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          {t("card1.plane")}
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          {t("card1.building")}
                        </div>
                        <div className="offer__body-btn btn">
                          {t("reserve")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={japan} alt="" />
                    </div>
                    <div className="offer__slide-info card__scale">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          {t("visa2.title")} <br />
                          {t("visa2.person")}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">{t("deal")}</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> {t("card2.car")}
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          {t("card2.plane")}
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          {t("card2.building")}
                        </div>
                        <div className="offer__body-btn btn">
                          {t("reserve")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={china} alt="" />
                    </div>
                    <div className="offer__slide-info card__scale">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          {t("visa3.title")} <br />
                          {t("visa3.person")}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">{t("deal")}</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> {t("card3.car")}
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          {t("card3.plane")}
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          {t("card3.building")}
                        </div>
                        <div className="offer__body-btn btn">
                          {t("reserve")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={hongkong} alt="" />
                    </div>
                    <div className="offer__slide-info card__scale">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          {t("visa4.title")} <br />
                          {t("visa4.person")}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">{t("deal")}</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> {t("card4.car")}
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          {t("card4.plane")}
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          {t("card4.building")}
                        </div>
                        <div className="offer__body-btn btn">
                          {t("reserve")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={india} alt="" />
                    </div>
                    <div className="offer__slide-info card__scale">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          {t("visa5.title")} <br />
                          {t("visa5.person")}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">{t("deal")}</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> {t("card5.car")}
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          {t("card5.plane")}
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          {t("card5.building")}
                        </div>
                        <div className="offer__body-btn btn">
                          {t("reserve")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="offer__slider-icons">
            <div
              className="offer__slider-btn"
              onClick={() => swiperInstance.slidePrev()}
            >
              <FaArrowCircleLeft />
            </div>
            <div
              className="offer__slider-btn"
              onClick={() => swiperInstance.slideNext()}
            >
              <FaArrowCircleRight />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
