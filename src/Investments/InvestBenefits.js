import React from "react";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="title">
        <h1>Benefits of Lambo Investments</h1>
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
          <span>Up to 63.70% per Year</span>
          <p>
            The percentage of profitability is floating, but it is consistently
            high.
          </p>
        </div>
        <div className="item">
          <div className="icon">
            <img src="./assets/circuit.svg" />
          </div>
          <span>Fixed Risk Limit</span>
          <p>
            According to the trading strategy’s adjustment, we guarantee that
            the drawdown of your portfolio cannot be deeper than 10%.
          </p>
        </div>
        <div className="item">
          <div className="icon">
            <img src="./assets/engineering.svg" />
          </div>
          <span>Unique Mechanism</span>
          <p>
            Lambo assets received after investing starts guarantee the return of
            your invested assets.
          </p>
        </div>
        <div className="item">
          <div className="icon">
            <img src="./assets/electrical-threshold.svg" />
          </div>
          <span>Transparency of Operations</span>
          <p>
            Invested funds are managed through public smart contracts. You can
            always audit these smart contracts.
          </p>
        </div>
        <div className="item">
          <div className="icon">
            <img src="./assets/internal.svg" />
          </div>
          <span>Flexible Deposit Size & Period</span>
          <p>
            You don’t need to invest much to get in the game. Start with as
            little as 10 USD. Withdraw at any time.
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

export default Benefits;
