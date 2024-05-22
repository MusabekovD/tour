import React, { useState } from "react";
import "./Test.css";
import img1 from "../../assets/locations/antalya.jpg";
import img2 from "../../assets/locations/best-05.jpg";
import img3 from "../../assets/locations/dubai.jpg";
import img4 from "../../assets/locations/istanbul.jpg";
import img5 from "../../assets/locations/sharm.jpg";
import { TbZoomScan } from "react-icons/tb";
const Test = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleClass = (img) => {
    setOpenCard((prevCard) => (prevCard === img ? null : img));
  };

  return (
    <div className="test container">
      <div className="header__text">
        <h2 className="header__title">Best Locations</h2>
        <p className="header__subtitle">
          Discover the best offers in each city, curated just for you. Immerse
          yourself in a world of savings and indulge in unparalleled
          experiences.
        </p>
      </div>
      <div className="best__flex">
        <div
          className={`best__item ${
            openCard === "img1" ? "best__item-active" : ""
          }`}
          onClick={() => toggleClass("img1")}
          className={`best__item ${
            openCard === "img1" ? "best__item-active" : ""
          }`}
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="best__box" onClick={() => toggleClass("img1")}>
            <TbZoomScan />
          </div>
          <div className="best__text">
            <h5>Dubay</h5>
            <p>Aholisi:: 3M</p>
          </div>
        </div>
        <div
          onClick={() => toggleClass("img2")}
          className={`best__item ${
            openCard === "img2" ? "best__item-active" : ""
          }`}
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="best__box" onClick={() => toggleClass("img2")}>
            <TbZoomScan />
          </div>
          <div className="best__text">
            <h5>Dubay</h5>
            <p>Aholisi:: 3M</p>
          </div>
        </div>
        <div
          onClick={() => toggleClass("img3")}
          className={`best__item ${
            openCard === "img3" ? "best__item-active" : ""
          }`}
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="best__box" onClick={() => toggleClass("img3")}>
            <TbZoomScan />
          </div>
          <div className="best__text">
            <h5>Dubay</h5>
            <p>Aholisi:: 3M</p>
          </div>
        </div>
        <div
          onClick={() => toggleClass("img4")}
          className={`best__item ${
            openCard === "img4" ? "best__item-active" : ""
          }`}
          style={{ backgroundImage: `url(${img4})` }}
        >
          <div className="best__box" onClick={() => toggleClass("img4")}>
            <TbZoomScan />
          </div>
          <div className="best__text">
            <h5>Dubay</h5>
            <p>Aholisi:: 3M</p>
          </div>
        </div>
        <div
          onClick={() => toggleClass("img5")}
          className={`best__item ${
            openCard === "img5" ? "best__item-active" : ""
          }`}
          style={{ backgroundImage: `url(${img5})` }}
        >
          <div className="best__box" onClick={() => toggleClass("img5")}>
            <TbZoomScan />
          </div>
          <div className="best__text">
            <h5>Dubay</h5>
            <p>Aholisi:: 3M</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
