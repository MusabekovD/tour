import "./Location.css";
import "./LocationQuery.css";
import dubai from "../../assets/locations/dubai.jpg";
import { TbZoomScan } from "react-icons/tb";
import { useState } from "react";
const Locations = () => {
  /*   const [collapsedStates, setCollapsedStates] = useState([false, false]);

  const toggleCollapse = (index) => {
    setCollapsedStates(
      collapsedStates.map((collapsed, i) =>
        i === index ? !collapsed : collapsed
      )
    );
  }; */

  return (
    <section className="locations">
      <div className="container">
        <div className="header__text">
          <h2 className="header__title">Best Locations</h2>
          <p className="header__subtitle">
            Discover the best offers in each city, curated just for you. Immerse
            yourself in a world of savings and indulge in unparalleled
            experiences.
          </p>
        </div>
        <div className="container">
          <div className="location__slider-wrapper container">
            <div className="location__slider">
              <div className="location__img">
                <img src={dubai} alt="" />
                <div className="location__info">
                  <div className="location__info-btn">
                    <TbZoomScan />
                  </div>
                  <div className="location__info-text">
                    Dubai : <br />
                    Population : 2M
                  </div>
                </div>
              </div>
            </div>
            <div className="location__slider">
              <div className="location__img">
                <img src={dubai} alt="" />
                <div className="location__info">
                  <div className="location__info-btn">
                    <TbZoomScan />
                  </div>
                  <div className="location__info-text">
                    Dubai : <br />
                    Population : 2M
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
