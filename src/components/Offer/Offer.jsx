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

import hongkong from "../../assets/hero/hongkong.jpg"
import india from "../../assets/hero/india.jpg"
import china from "../../assets/hero/china.jpg"
import japan from "../../assets/hero/japan.jpg"
import oman from "../../assets/hero/oman.jpg"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

const Offer = () => {
  // Swiper instance reference
  let swiperInstance = null;

  return (
    <>

      <section className="offer">
        <div className="container wrapper">
          <div className="header__text">
            <h2 className="header__title">Best Weekly Offers In Each City</h2>
            <p className="header__subtitle">
              Discover the best weekly offers in each city, curated just for you.
              Immerse yourself in a world of savings and indulge in unparalleled
              experiences.
            </p>
          </div>
          <div className="offer__slider-cards">
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
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={img1} alt="" />
                    </div>
                    <div className="offer__slide-info">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          England <br />
                          300 check ins{" "}
                        </div>
                        <div className="offer__slide-subtitle">
                          $999 <br />
                          /person{" "}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">Deal includes</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> 6days trip hotel included
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          Airline will included
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          Daily Places visit
                        </div>
                        <div className="offer__body-btn btn">
                          Make A Reservation{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="offer__slider-icons">
                    <div className="offer__slider-left"></div>
                    <div className="offer__slider-right"></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={img2} alt="" />
                    </div>
                    <div className="offer__slide-info">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          England <br />
                          300 check ins{" "}
                        </div>
                        <div className="offer__slide-subtitle">
                          $999 <br />
                          /person{" "}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">Deal includes</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> 6days trip hotel included
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          Airline will included
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          Daily Places visit
                        </div>
                        <div className="offer__body-btn btn">
                          Make A Reservation{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="offer__slider-icons">
                    <div className="offer__slider-left"></div>
                    <div className="offer__slider-right"></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={img3} alt="" />
                    </div>
                    <div className="offer__slide-info">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          England <br />
                          300 check ins
                        </div>
                        <div className="offer__slide-subtitle">
                          $999 <br />
                          /person
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">Deal includes</h6>
                        <div className="offer__body-icon flex">
                          <FaCar /> 6days trip hotel included
                        </div>
                        <div className="offer__body-icon flex">
                          <SiEthiopianairlines />
                          Airline will included
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          Daily Places visit
                        </div>
                        <div className="offer__body-btn btn">
                          Make A Reservation{" "}
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
                    <div className="offer__slide-info">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          England <br />
                          300 check ins
                        </div>
                        <div className="offer__slide-subtitle">
                          $999 <br />
                          /person
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">Deal includes</h6>
                        <div className="offer__body-icon flex">
                          <FaCar /> 6days trip hotel included
                        </div>
                        <div className="offer__body-icon flex">
                          <SiEthiopianairlines />
                          Airline will included
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          Daily Places visit
                        </div>
                        <div className="offer__body-btn btn">
                          Make A Reservation{" "}
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
                    <div className="offer__slide-info">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          England <br />
                          300 check ins
                        </div>
                        <div className="offer__slide-subtitle">
                          $999 <br />
                          /person
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">Deal includes</h6>
                        <div className="offer__body-icon flex">
                          <FaCar /> 6days trip hotel included
                        </div>
                        <div className="offer__body-icon flex">
                          <SiEthiopianairlines />
                          Airline will included
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          Daily Places visit
                        </div>
                        <div className="offer__body-btn btn">
                          Make A Reservation{" "}
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
      <section className="offer">
        <div className="container wrapper">
          <div className="header__text">
            <h2 className="header__title">Visa Support</h2>
            <p className="header__subtitle">
            Experience stress-free travel with our expert visa support. We provide seamless assistance and comprehensive guidance, ensuring a smooth journey.
            </p>
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
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={oman} alt="" />
                    </div>
                    <div className="offer__slide-info">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          Oman <br />
                          300 check ins{" "}
                        </div>
                        <div className="offer__slide-subtitle">
                          $999 <br />
                          /person{" "}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">Deal includes</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> 6days trip hotel included
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          Airline will included
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          Daily Places visit
                        </div>
                        <div className="offer__body-btn btn">
                          Make A Reservation{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="offer__slider-icons">
                    <div className="offer__slider-left"></div>
                    <div className="offer__slider-right"></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={japan} alt="" />
                    </div>
                    <div className="offer__slide-info">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          Japan <br />
                          300 check ins{" "}
                        </div>
                        <div className="offer__slide-subtitle">
                          $999 <br />
                          /person{" "}
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">Deal includes</h6>
                        <div className="offer__body-icon flex">
                          {" "}
                          <FaCar /> 6days trip hotel included
                        </div>
                        <div className="offer__body-icon flex">
                          {" "}
                          <SiEthiopianairlines />
                          Airline will included
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          Daily Places visit
                        </div>
                        <div className="offer__body-btn btn">
                          Make A Reservation{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="offer__slider-icons">
                    <div className="offer__slider-left"></div>
                    <div className="offer__slider-right"></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer__slider">
                  <div className="offer__slide">
                    <div className="offer__img">
                      <img src={china} alt="" />
                    </div>
                    <div className="offer__slide-info">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          China <br />
                          300 check ins
                        </div>
                        <div className="offer__slide-subtitle">
                          $999 <br />
                          /person
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">Deal includes</h6>
                        <div className="offer__body-icon flex">
                          <FaCar /> 6days trip hotel included
                        </div>
                        <div className="offer__body-icon flex">
                          <SiEthiopianairlines />
                          Airline will included
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          Daily Places visit
                        </div>
                        <div className="offer__body-btn btn">
                          Make A Reservation{" "}
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
                    <div className="offer__slide-info">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                          HongKong <br />
                          300 check ins
                        </div>
                        <div className="offer__slide-subtitle">
                          $999 <br />
                          /person
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">Deal includes</h6>
                        <div className="offer__body-icon flex">
                          <FaCar /> 6days trip hotel included
                        </div>
                        <div className="offer__body-icon flex">
                          <SiEthiopianairlines />
                          Airline will included
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          Daily Places visit
                        </div>
                        <div className="offer__body-btn btn">
                          Make A Reservation{" "}
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
                    <div className="offer__slide-info">
                      <div className="offer__slide-header">
                        <div className="offer__slide-title">
                        india <br />
                          300 check ins
                        </div>
                        <div className="offer__slide-subtitle">
                          $999 <br />
                          /person
                        </div>
                      </div>
                      <div className="offer__slide-body">
                        <h6 className="offer__body-title">Deal includes</h6>
                        <div className="offer__body-icon flex">
                          <FaCar /> 6days trip hotel included
                        </div>
                        <div className="offer__body-icon flex">
                          <SiEthiopianairlines />
                          Airline will included
                        </div>
                        <div className="offer__body-icon flex">
                          <FaBusSimple />
                          Daily Places visit
                        </div>
                        <div className="offer__body-btn btn">
                          Make A Reservation{" "}
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
