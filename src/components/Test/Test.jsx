import React, { useState } from "react";
import "./Test.css"
const Test = () => {
  const [collapsedStates, setCollapsedStates] = useState([false,false,false])


  const toggleCollapse = (index) => {
    setCollapsedStates(
      collapsedStates.map((collapsed, i) =>
        i === index ? !collapsed : collapsed
      )
    );
  };
  return (
    <div className="test container">
      {collapsedStates.map((isCollapsed, index) => (
        <div key={index} className={`image ${isCollapsed ? "collapsed" : ""}`}>
          <button onClick={() => toggleCollapse(index)}>
            {isCollapsed ? "Open" : "Close"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Test;
