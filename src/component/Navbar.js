import React from "react";
import logo from "./images/images/Logo.png";
import "./Style.css";
import Vector from "./images/images/background/Vector.svg";
import Group from "./images/images/background/Group.svg";
const Navbar = () => {
  return (
    <>
      <div className="big-container">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="item">
            <ul>
              <li>
                <a href="#">
                  About <br /> Us
                </a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Clients</a>
              </li>
              <li>
                <a href="#">Contsacts</a>
              </li>
            </ul>
            <p>En Ru UZ</p>
          </div>
        </div>
        <div className="header">
          <img src={Vector} alt="" />
          <h1>
            Bloom <br /> Architechture
          </h1>
          <div className="order-project">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              id="arrow"
            >
              <path
                d="M66.6789 31.2201C66.8552 36.6117 69.5245 40.6488 72.0052 42.7478L73.8676 40.5467C71.9309 38.9079 69.7071 35.6054 69.5606 31.1259C69.4155 26.6871 70.7163 21.4407 77.4441 14.7129L75.4053 12.6741C68.6774 19.402 63.4312 20.7028 58.9924 20.5576C54.5129 20.4111 51.2103 18.1874 49.5715 16.2506L47.3705 18.1131C49.4695 20.5937 53.5065 23.263 58.8981 23.4393C61.0096 23.5084 63.2926 23.1944 65.7138 22.3657L12.7922 75.2873L14.831 77.3261L67.7525 24.4045C66.9238 26.8257 66.6098 29.1086 66.6789 31.2201Z"
                fill="#E3E7F2"
              />
            </svg>
            <h3>
              Order <br /> project
            </h3>
          </div>
          <h2>
            Architecture that sets the tone: our agency <br /> specializes in
            creating innovative and <br /> sustainable buildings,
            <span>
              {" "}
              which embody <br /> modern trends and technologies.
            </span>
          </h2>

          <div className="Services">
            <img src={Group} alt="" />
            <marquee behavior="" direction="">
              Services Services Services
            </marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
