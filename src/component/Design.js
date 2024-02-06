import React from "react";
import service from "./images/images/background/service.png";

const Design = () => {
  return (
    <>
      <div className="big-container">
        <div className="design">
          <div className="design-div-1">
            <h1>Architectural Engineering</h1>
            <p>01</p>
          </div>
          <div className="design-div-1">
            <h1>Interior Design</h1>
            <p>02</p>
          </div>
          <div className="design-div-1">
            <h1>Urban environment design</h1>
            <p>03</p>
          </div>
          <div className="design-div-1">
            <h1>Landscape design</h1>
            <p>04</p>
          </div>
          <div className="design-div-1">
            <h1>Project documentation</h1>
            <p>05</p>
          </div>
          <div className="design-div-1">
            <h1>Author's supervision</h1>
            <p>06</p>
          </div>
        </div>
        <div className="design-img">
          <img src={service} alt="" />
        </div>
      </div>
    </>
  );
};

export default Design;
