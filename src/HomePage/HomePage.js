import React from "react";
import Footer from "../Global/Footer";
import Download from "./Downloads";
import Information from "./Information";
import Intro from "./Intro";
import Markets from "./Markets";
import Trading from "./Trading";

const Homepage = () => {
  return (
    <div className="home-page">
      <div className="page-wrapper">
        <div className="info">
          <div className="contain">
            <Intro />
          </div>
          <img className="design" src="./assets/Design 1.svg" />
        </div>
        <div className="trade-wrapper">
          <div className="contain">
            <Trading />
          </div>
        </div>
        <div className="contain">
          <Information />
        </div>
        <div className="contain">
          <Markets />
        </div>
        <div className="download-app">
          <div className="contain">
            <Download />
          </div>
        </div>
        <div className="last-section">
          <Footer />
          <div className="yona-reserve">
            <span>All Rights Are Reserved For <a className="home-link" href="/">Yona</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
