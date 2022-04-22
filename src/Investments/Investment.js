import React from "react";
import Buttons from "../Global/Button";
import Slider from "@mui/material/Slider";
import Benefits from "./InvestBenefits";
import Footer from "../Global/Footer";

const Investments = () => {
  return (
    <div className="invetsment">
      <div className="contain">
        <div className="page-wrapper">
          <div className="intro">
            <div className="content">
              <h1>Lambo Investments</h1>
              <div className="balance">
                <img src="./assets/analysis.svg" />
                <span>
                  Earn up to <b>63.7%</b> a year.
                </span>
              </div>
              <div className="balance">
                <img src="./assets/percentage.svg" />
                <span>
                  Earn up to <b>63.7%</b> a year.
                </span>
              </div>
              <Buttons name="Invest" />
            </div>
            <img className="intro-pic" src="./assets/Rectangle 54.svg" />
          </div>
          <div className="information">
            <div className="item">
              <img src="./assets/users-alt.svg" />
              <div className="spans">
                <span>Total Clients</span>
                <b>3.1K+</b>
              </div>
            </div>
            <div className="item">
              <img src="./assets/adjust-circle.svg" />
              <div className="spans">
                <span>Invested In Lamboo</span>
                <b>$11.8M+</b>
              </div>
            </div>
            <div className="item">
              <img src="./assets/coins.svg" />
              <div className="spans">
                <span>Clients Income</span>
                <b>$172K+</b>
              </div>
            </div>
            <div className="item">
              <img src="./assets/arrow-from-top.svg" />
              <div className="spans">
                <span>Average Deposit</span>
                <b>$2.6K+</b>
              </div>
            </div>
          </div>
          <div className="growth">
            <div className="title">
              <b>Growth Leader</b>
              <span>in 7 days</span>
            </div>
            <div className="exchange-name">
              <img src="./assets/bitcoin.svg" />
              <span>BTC</span>
            </div>
            <div className="chart">
              <span>+1.97%</span>
              <img src="./assets/chart2.svg" />
            </div>
          </div>
          <div className="income-chart">
            <div className="heading">
              <span>Calculate Your Income</span>
            </div>
            <div className="content">
              <div className="generate">
                <div className="coin-image">
                  <img src="./assets/bitcoin.svg" />
                  <span>BTC</span>
                </div>
                <span className="total-balance">
                  Apy<b>~4.19%</b>
                </span>
                <Buttons name="Generate" />
              </div>
              <div className="income">
                <div className="amount">
                  <b>500,000</b>
                  <span>USDT</span>
                </div>
                <Slider
                  aria-label="Always visible"
                  defaultValue={10}
                  max={1000000}
                  // getAriaValueText={valuetext}
                  step={1}
                  valueLabelDisplay="on"
                />
                <div className="range">
                  <span>10</span>
                  <span>1,000,000</span>
                </div>
                <div className="prices">
                  <span>Daily Income</span>
                  <span className="rate">
                    <b>872.60</b>USDT
                  </span>
                </div>
                <div className="prices">
                  <span>Monthly Income</span>
                  <span className="rate">
                    <b>26,541.66</b>USDT
                  </span>
                </div>
                <div className="prices">
                  <span>Yearly Income</span>
                  <span className="rate">
                    <b>318,500.00</b>USDT
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Benefits />
        </div>
      </div>
      <div className="speed-section">
        <div className="contain">
          <div className="wrapper">
            <div className="content">
              <h1>What is Lambo Investments</h1>
              <p>
                Lambo stands out among other Yona Exchange investment products
                due to its balanced risk/profit strategy: The sustainable reward
                of about 60% is provided by the lowest risk compared to other
                algorithmic trading investment strategies. Due to the trading
                strategy’s adjustment, the maximum drawdown of the USDTLAMBO
                asset cannot be deeper than 10%.
                <br></br>
                <br></br>
                When you invest USDT, you receive USDTLAMBO assets in return.
                USDTLAMBO is the assurance asset that proves that your assets
                are invested in the smart contract. You can withdraw USDT at any
                time, i.e. exchange your USDTLAMBO assets to USDT assets at a
                new price, fixing your profit or loss. You can find out more in
                the FAQ.
              </p>
            </div>
            <div className="image">
              <img src="./assets/speed.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="last-section">
        <Footer />
        <div className="yona-reserve">
          <span>All Rights Are Reserved For <a className="home-link" href="/">Yona</a></span>
        </div>
      </div>
      <img className="design" src="./assets/Desgin5.svg" />
    </div>
  );
};

export default Investments;
