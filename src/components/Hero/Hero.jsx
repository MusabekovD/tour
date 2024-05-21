import React from "react";
import "./Hero.css";
import "./HeroQuery.css";

import { FaUser } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
const Hero = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        Autoplay = {true}
        className="hero"
      >
        <SwiperSlide>
          <section className="hero hero-1" id="hero">
            <div className="container">
              <div className="hero__main">
                <div className="hero__text">
                  <p className="hero__text-subtitle">
                    Take a Glimpse Into The Beautiful City Of:
                  </p>
                  <h2 className="hero__text-title">Istanbul</h2>
                  <div className="hero__text-btn btn">Go there !</div>
                </div>
                <div className="hero__info">
                  <div className="hero__population hero__info-flex">
                    <div className="hero__icon">
                      <a href="#">
                        <FaUser />
                      </a>
                    </div>
                    <div className="hero__txt">
                      Population: <br /> <span>8.66 M</span>
                    </div>
                  </div>
                  <div className="hero__territory hero__info-flex">
                    <div className="hero__icon">
                      <a href="#">
                        <FaEarthAfrica />
                      </a>
                    </div>
                    <div className="hero__txt">
                      Territory: <br /> <span>41.290 KM2</span>
                    </div>
                  </div>
                  <div className="hero__price hero__info-flex">
                    <div className="hero__icon">
                      <a href="#">
                        <IoMdHome />
                      </a>
                    </div>
                    <div className="hero__txt">
                      AVG Price: <br /> <span>$1.100.200 </span>
                    </div>
                  </div>
                  <div className="btn">Explore More</div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="hero hero-2" id="hero">
            <div className="container">
              <div className="hero__main">
                <div className="hero__text">
                  <p className="hero__text-subtitle">
                    Take a Glimpse Into The Beautiful City Of:
                  </p>
                  <h2 className="hero__text-title">Antalya</h2>
                  <div className="hero__text-btn btn">Go there !</div>
                </div>
                <div className="hero__info">
                  <div className="hero__population hero__info-flex">
                    <div className="hero__icon">
                      <a href="#">
                        <FaUser />
                      </a>
                    </div>
                    <div className="hero__txt">
                      Population: <br /> <span>8.66 M</span>
                    </div>
                  </div>
                  <div className="hero__territory hero__info-flex">
                    <div className="hero__icon">
                      <a href="#">
                        <FaEarthAfrica />
                      </a>
                    </div>
                    <div className="hero__txt">
                      Territory: <br /> <span>41.290 KM2</span>
                    </div>
                  </div>
                  <div className="hero__price hero__info-flex">
                    <div className="hero__icon">
                      <a href="#">
                        <IoMdHome />
                      </a>
                    </div>
                    <div className="hero__txt">
                      AVG Price: <br /> <span>$1.100.200 </span>
                    </div>
                  </div>
                  <div className="btn">Explore More</div>
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
            <div className="container">
              <div className="hero__main">
                <div className="hero__text">
                  <p className="hero__text-subtitle">
                    Take a Glimpse Into The Beautiful City Of:
                  </p>
                  <h2 className="hero__text-title">Dubai</h2>
                  <div className="hero__text-btn btn">Go there !</div>
                </div>
                <div className="hero__info">
                  <div className="hero__population hero__info-flex">
                    <div className="hero__icon">
                      <a href="#">
                        <FaUser />
                      </a>
                    </div>
                    <div className="hero__txt">
                      Population: <br />{" "}
                      <span className="hero__txt-span">8.66 M</span>
                    </div>
                  </div>
                  <div className="hero__territory hero__info-flex">
                    <div className="hero__icon">
                      <a href="#">
                        <FaEarthAfrica />
                      </a>
                    </div>
                    <div className="hero__txt">
                      Territory: <br /> <span>41.290 KM2</span>
                    </div>
                  </div>
                  <div className="hero__price hero__info-flex">
                    <div className="hero__icon">
                      <a href="#">
                        <IoMdHome />
                      </a>
                    </div>
                    <div className="hero__txt">
                      AVG Price: <br /> <span>$1.100.200 </span>
                    </div>
                  </div>
                  <div className="btn">Explore More</div>
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
