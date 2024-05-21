import React from "react";
import "./Explore.css";
import "./ExploreQuery.css";
import img1 from "../../assets/explore/1.jpg";
import img2 from "../../assets/explore/2.jpg";
import img3 from "../../assets/explore/3.jpg";
import img4 from "../../assets/explore/4.jpg";
import img5 from "../../assets/explore/5.jpg";
import img6 from "../../assets/explore/6.jpg";


import { FaUser } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
const Explore = () => {
  return (
    <>
      <section className="explore container" id="explore">
        <div className="container">
          <div className="header__text">
            <div className="header__title">
              {" "}
              Explore Destinations With Ease{" "}
            </div>
            <div className="header__subtitle">
              Find the best deals on railway and airplane tickets in each city,
              carefully selected for you.
            </div>
          </div>
          <div className="expore__contents">
            <div className="explore__img">
              <img src={img1} alt="" />
            </div>
            <div className="explore__info">
              <div className="explore__header">
                <div className="explore__header-text">
                  <h5>Cheap Railway Tickets With Us</h5>
                  <p>Whole world</p>
                </div>
                <div className="explore__header-btn btn">Explore More</div>
              </div>
              <p className="explore__body">
                Embark on a railway adventure and explore destinations
                worldwide. Whether it's the picturesque landscapes, bustling
                cities, or cultural gems, our rail services offer a unique and
                comfortable way to traverse the globe. Immerse yourself in the
                beauty of different cultures, all accessible through our
                extensive railway network. .
              </p>
            </div>
          </div>
          <div className="expore__contents">
            <div className="explore__img">
              <img src={img2} alt="" />
            </div>
            <div className="explore__info">
              <div className="explore__header">
                <div className="explore__header-text">
                  <h5>Discover Exciting Air Travel Deals</h5>
                  <p>Global Destinations</p>
                </div>
                <div className="explore__header-btn btn">Explore More</div>
              </div>
              <p className="explore__body">
                Embark on an airborne adventure and explore destinations
                worldwide. Whether it's the breathtaking landscapes, vibrant
                cities, or cultural treasures, our airline services provide a
                convenient and exhilarating way to navigate the globe. Immerse
                yourself in the richness of diverse cultures, all easily
                accessible through our extensive air travel network. .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="explore container" id="explore">
        <div className="container">
          <div className="header__text">
            <div className="header__title">Visit One Of Our Countries Now</div>
            <div className="header__subtitle">
              Discover the best offers in each city, curated just for you.
              Immerse yourself in a world of savings and indulge in unparalleled
              experiences.
            </div>
          </div>
          <div className="expore__contents">
            <div className="explore__img">
              <img src={img3} alt="" />
            </div>
            <div className="explore__info">
              <div className="explore__header">
                <div className="explore__header-text">
                  <h5>Dubai</h5>
                  <p>United Arab Emirated</p>
                </div>
                <div className="explore__header-btn btn">Explore More</div>
              </div>
              <p className="explore__body">
                Dubai is a city and emirate in the United Arab Emirates known
                for luxury shopping, ultramodern architecture and a lively
                nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the
                skyscraper-filled skyline. At its foot lies Dubai Fountain, with
                jets and lights choreographed to music. On artificial islands
                just offshore is Atlantis, The Palm, a resort with water and
                marine-animal parks
              </p>
              <div className="explore__info-extra">
                <div className="explore__extra-population flex">
                  <FaUser className="explore__icon"/>
                  <p className="extra__txt">67.41 Mil People</p>
                </div>
                <div className="explore__extra-space flex">
                  <FaEarthAsia className="explore__icon"/>
                  <p className="extra__txt"> 551.500 km2</p>
                </div>
                <div className="explore__extra-price flex">
                  <FaHouse className="explore__icon"/>
                  <p className="extra__txt"> $425.600</p>
                </div>
              </div>
            </div>
          </div>
          <div className="expore__contents">
            <div className="explore__img">
              <img src={img4} alt="" />
            </div>
            <div className="explore__info">
              <div className="explore__header">
                <div className="explore__header-text">
                  <h5>Antalya</h5>
                  <p>Turkey</p>
                </div>
                <div className="explore__header-btn btn">Explore More</div>
              </div>
              <p className="explore__body">
                Antalya is the fastest-growing city in Turkey, and tourists from
                around the world are discovering its fabulous mix of great
                beaches and traditional Turkish culture. Kids will love the
                Beach Park, which features Aqua Land (a waterslide-fanatic's
                dream) and Dolphin Land (home to dolphins, sea lions and white
                whales). Make sure to explore the old town center and to see
                Hadrian's Gate.
              </p>
              <div className="explore__info-extra">
                <div className="explore__extra-population flex">
                  <FaUser className="explore__icon"/>
                  <p className="extra__txt">67.41 Mil People</p>
                </div>
                <div className="explore__extra-space flex">
                  <FaEarthAsia className="explore__icon"/>
                  <p className="extra__txt"> 551.500 km2</p>
                </div>
                <div className="explore__extra-price flex">
                  <FaHouse className="explore__icon"/>
                  <p className="extra__txt"> $425.600</p>
                </div>
              </div>
            </div>
          </div>
          <div className="expore__contents">
            <div className="explore__img">
              <img src={img5} alt="" />
            </div>
            <div className="explore__info">
              <div className="explore__header">
                <div className="explore__header-text">
                  <h5>Sharm El-Sheikh</h5>
                  <p>Egypt</p>
                </div>
                <div className="explore__header-btn btn">Explore More</div>
              </div>
              <p className="explore__body">
                Sharm El Sheikh is the center of tourism action in Sinai
                Peninsula and it has the world top diving sites. Specially the
                underwater wonders of Ras Mohammed national park that took Sharm
                city to whole different level. The city has diving and shipwreck
                sites that attract both advanced and recreational divers from
                around the world to discover the un parallel marine life deep
                down the red sea.
              </p>
              <div className="explore__info-extra">
                <div className="explore__extra-population flex">
                  <FaUser className="explore__icon"/>
                  <p className="extra__txt">67.41 Mil People</p>
                </div>
                <div className="explore__extra-space flex">
                  <FaEarthAsia className="explore__icon"/>
                  <p className="extra__txt"> 551.500 km2</p>
                </div>
                <div className="explore__extra-price flex">
                  <FaHouse className="explore__icon"/>
                  <p className="extra__txt"> $425.600</p>
                </div>
              </div>
            </div>
          </div>
          <div className="expore__contents">
            <div className="explore__img">
              <img src={img6} alt="" />
            </div>
            <div className="explore__info">
              <div className="explore__header">
                <div className="explore__header-text">
                  <h5>Sharm El-Sheikh</h5>
                  <p>Egypt</p>
                </div>
                <div className="explore__header-btn btn">Explore More</div>
              </div>
              <p className="explore__body">
                Sharm El Sheikh is the center of tourism action in Sinai
                Peninsula and it has the world top diving sites. Specially the
                underwater wonders of Ras Mohammed national park that took Sharm
                city to whole different level. The city has diving and shipwreck
                sites that attract both advanced and recreational divers from
                around the world to discover the un parallel marine life deep
                down the red sea.
              </p>
              <div className="explore__info-extra">
                <div className="explore__extra-population flex">
                  <FaUser className="explore__icon"/>
                  <p className="extra__txt">67.41 Mil People</p>
                </div>
                <div className="explore__extra-space flex">
                  <FaEarthAsia className="explore__icon"/>
                  <p className="extra__txt"> 551.500 km2</p>
                </div>
                <div className="explore__extra-price flex">
                  <FaHouse className="explore__icon"/>
                  <p className="extra__txt"> $425.600</p>
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
