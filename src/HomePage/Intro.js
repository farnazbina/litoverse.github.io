import React, { useState } from "react";
// import ReactFlagsSelect from "react-flags-select";
import Buttons from "../Global/Button";

const Intro = () => {
  return (
    <div className="intro">
      <div className="contents">
        <h1>The world's safest cryptocurrency exchange</h1>
        <p>
          Buy, sell and stake assets quickly and securely with all the
          advantages of a centralized exchange, but retaining complete control
          of your funds.
        </p>
        <div className="currency">
          <div className="buy">
            <label for="buy">I buy</label>
            <input
              type="text"
              id="buy"
              name="fav_language"
              value="BTC"
            />
            <img className="bitcoin" src="./assets/BTC-svg.svg" />
            <img src="./assets/next(1).svg" />
          </div>
          <div className="spend">
            <label for="spend">I spend</label>
            <input
              type="text"
              id="spend"
              name="fav_language"
              value="000,000,000.000"
            />
            <img className="flag" src="./assets/usd.svg" />
            <span className="USD">USD</span>
            <img src="./assets/next(1).svg" />
          </div>
          <Buttons name="BUY BTC" />
          <span className="hint">Your fee is 1%</span>
        </div>
      </div>
      <div className="image">
        <img src="./assets/Image.svg" />
      </div>
    </div>
  );
};
export default Intro;
