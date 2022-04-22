import React from "react";
import Buttons from '../../Global/Button';

const StackFund = () => {
  return (
    <div className="funds">
      <div className="contents">
        <h1>How to stake my funds?</h1>
        <div className="item">
          <img src="./assets/icon-buy.svg" />
          <span>
            <b>1.</b>Buy USDN assets
          </span>
        </div>
        <div className="item">
          <img src="./assets/icon-chart.svg" />
          <span>
            <b>2.</b>StakeUSDN
          </span>
        </div>
        <div className="item">
          <img src="./assets/icon-pc.svg" />
          <span>
            <b>3.</b>Done! Recieve USDN interest daily
          </span>
        </div>
      </div>
      <div className="video-section">
        <div className="videos">
          <img className="media" src="./assets/videopic.png" />
          <div className="play">
            <img src="./assets/play.svg" />
            <span>Watch Tutorial</span>
          </div>
        </div>
        <div className="faq">
            <span>Still have questions? Read the<b>FAQ.</b></span>
            <Buttons name="Stack Now" />
        </div>
        <img className="BG" src="./assets/pattern.svg" />
      </div>
    </div>
  );
};

export default StackFund;
