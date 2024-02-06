import React from "react";
import Plan from "./images/images/background/plan.svg";
import Imgone from "./images/images/portfolio/1.png";
import Imgtwo from "./images/images/portfolio/2.png";
import Imgthree from "./images/images/portfolio/3.png";

const Portfolio = () => {
  return (
    <>
      <div className="big-container">
        <div className="portfolio">
          <img src={Plan} alt="" />
          <marquee behavior="" direction="">
            Portfolio Portfolio Portfolio
          </marquee>
        </div>
      </div>
      <div className="portfolio-1">
        <div className="miror-maze">
          <div className="div-1">
            <img src={Imgone} alt="" />
            <h3>- 01 -</h3>
            <h1>Mirror Maze</h1>
            <p>residential complex with mirror walls</p>
          </div>

          <div className="div-1">
            <img src={Imgtwo} alt="" />
            <h3>- 01 -</h3>
            <h1>Mirror Maze</h1>
            <p>residential complex with mirror walls</p>
          </div>

          <div className="div-1">
            <img src={Imgthree} alt="" />
            <h3>- 01 -</h3>
            <h1>Mirror Maze</h1>
            <p>residential complex with mirror walls</p>
          </div>
        </div>
        <div className="arow">
          <div className="arrow-1">
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          <div className="arrow-2">
            <i id="bx" className="bx bx-right-arrow-alt"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
