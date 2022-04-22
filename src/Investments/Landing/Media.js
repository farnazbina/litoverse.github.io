import React from "react";
import Buttons from '../../Global/Button';

const Media = () => {
  return (
    <div className="media-section">
      <div className="introduction">
        <div className="title">
          <h1>Media</h1>
          <img src="./assets/Lines1.svg" />
        </div>
        <div className="wrapper">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
      <div className="get-premium">
        <h1>Are you a Big Fish?</h1>
        <p>
          Waves.Exchange is the best place for holders with a stake greater than
          100k USD. We provide the highest levels of security, support, and
          governance insight to protect your assets and to generate maximum
          returns.
        </p>
        <div className="mail">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Name" />
          <Buttons name="Get Premium Service" />
        </div>
      </div>
    </div>
  );
};

export default Media;
