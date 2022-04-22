import React from "react";

const StackBenefits = () => {
  return (
    <div className="benefits">
      <div className="title">
        <h1>Benefits of BTC Staking</h1>
        <img src="./assets/Lines1.svg" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis
      </p>
      <div className="contents">
        <div className="item">
          <div className="icon">
            <img src="./assets/copyright.svg" />
          </div>
          <span>~3.48% a year in BTC</span>
          <p>
            The percentage of profitability is floating, but it is consistently
            high.
          </p>
        </div>
        <div className="item">
          <div className="icon">
            <img src="./assets/engineering.svg" />
          </div>
          <span>Unique Mechanism</span>
          <p>
            BTCLP assets received after staking starts guarantee the return of
            your BTC. The smart contract mechanism ensures the constant growth
            of the BTCLP price.
          </p>
        </div>
        <div className="item">
          <div className="icon">
            <img src="./assets/electrical-threshold.svg" />
          </div>
          <span>Transparency of Operations</span>
          <p>
            Staking funds are managed through a public smart contract. You can
            always audit this smart contract.
          </p>
        </div>
        <div className="item">
          <div className="icon">
            <img src="./assets/circuit.svg" />
          </div>
          <span>High volatility</span>
          <p>
            Due to the high volatility, you get the opportunity to multiply your
            income in dollars.
          </p>
        </div>
        <div className="item">
          <div className="icon">
            <img src="./assets/internal.svg" />
          </div>
          <span>Flexible Deposit Size & Period</span>
          <p>
            You can stake any amount starting from 0.0001 BTC. At any time, you
            can replenish the deposit for any amount or cancel it without losing
            accrued interest.
          </p>
        </div>
        <div className="item">
          <div className="icon">
            <img src="./assets/online-support.svg" />
          </div>
          <span>24/7 Customer Support</span>
          <p>Contact our support team anytime, anywhere for any questions.</p>
        </div>
      </div>
    </div>
  );
};

export default StackBenefits;
