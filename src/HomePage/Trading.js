import React from "react";
import Buttons from "../Global/Button";

const Trading = () => {
  return (
    <div className="trad-stack">
      <div className="contents">
        <div className="title">
          <img src="./assets/trading.svg" />
          <div className="heading">
            <h1>Trading</h1>
            <img className="lines" src="./assets/Lines.svg" />
          </div>
        </div>
        <div className="articles">
          <div className="item">
            <h6>Low, fixed fees</h6>
            <p>Pay just 0.003 Yona per order filled</p>
          </div>
          <div className="item">
            <h6>Gateways for popular currencies</h6>
            <p>
              Access major fiat and cryptocurrencies: BTC, LTC, ETH, and others
            </p>
          </div>
          <div className="item">
            <h6>Fast asset creation</h6>
            <p>Create your own asset in under 60 seconds</p>
          </div>
        </div>
        <Buttons name="Trade Now" />
      </div>
      <div className="contents">
        <div className="title">
          <img src="./assets/stacking.svg" />
          <div className="heading">
            <h1>Stacking</h1>
            <img className="lines" src="./assets/Lines.svg" />
          </div>
        </div>
        <div className="articles">
          <div className="item">
            <h6>Staking income</h6>
            <p>
              Earn revenues by staking cryptocurrency through a smart contract
            </p>
          </div>
          <div className="item">
            <h6>Daily rewards</h6>
            <p>Get regular payments in USDN, Yona and USDT (coming soon)</p>
          </div>
          <div className="item">
            <h6>Transparency</h6>
            <p>Trace any transaction on the blockchain</p>
          </div>
        </div>
        <Buttons name="Stack Now" />
      </div>
    </div>
  );
};
export default Trading;
