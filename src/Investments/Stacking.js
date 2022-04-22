import React from "react";
import Buttons from "../Global/Button";
import Slider from "@mui/material/Slider";
import StackBenefits from "./StackBenefits";
import Footer from "../Global/Footer";

const Stacking = () => {
  return (
    <div className="invetsment stacks">
      <div className="contain">
        <div className="page-wrapper">
          <div className="intro">
            <div className="content">
              <h1>Bitcoin Stacking</h1>
              <div className="balance">
                <img src="./assets/analysis.svg" />
                <span>
                Earn <b>~3.48%</b> a year in BTC just for holding assets.
                </span>
              </div>
              <Buttons name="Stake Now" />
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
                <span>Total BTC Stacked</span>
                <b>401+</b>
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
          <div className="income-chart">
            <div className="heading">
              <span>Calculate Your Income</span>
            </div>
            <div className="content">
              <div className="generate">
                <p>
                  Calculate and compare your income using the live button. See
                  your projected earnings in BTC. The current annual yield is
                  shown, it is calculated dynamically reflecting network
                  variations. An example of calculating interest on staking is
                  for informational purposes.
                </p>
                <div className="image">
                  <img src="./assets/Yield.svg" />
                </div>
              </div>
              <div className="income">
                <span className="title">
                  How many BTC do you want to stake?
                </span>
                <div className="amount">
                  <b>4.999</b>
                  <span>USDT</span>
                </div>
                <Slider
                  aria-label="Always visible"
                  defaultValue={0}
                  max={10}
                  // getAriaValueText={valuetext}
                  step={0.001}
                  valueLabelDisplay="on"
                />
                <div className="range">
                  <span>0.002</span>
                  <span>10</span>
                </div>
                <div className="prices">
                  <span>Daily Income</span>
                  <span className="rate">
                    <b>0.000476</b>BTC ($16.98)
                  </span>
                </div>
                <div className="prices">
                  <span>Monthly Income</span>
                  <span className="rate">
                    <b>0.014502</b>BTC ($516.54)
                  </span>
                </div>
                <div className="prices">
                  <span>Yearly Income</span>
                  <span className="rate">
                    <b>0.174033</b>BTC ($6,198.52)
                  </span>
                </div>
                <Buttons name="Stake Now" />
              </div>
            </div>
          </div>
          <StackBenefits />
        </div>
      </div>
      <div className="speed-section">
        <div className="contain">
          <div className="wrapper">
            <div className="content">
              <h1>What is BTC Staking</h1>
              <p>
                BTC staking is a DeFi interchain product on the Waves
                blockchain. Funds are accumulated on the Waves blockchain, which
                are then proxied into DeFi products of the Ethereum ecosystem,
                including Curve, Uniswap, etc.
                <br></br>
                <br></br>
                When staking BTC, you receive the BTCLP assets in return. BTCLP
                is the assurance of your funds staked to the smart contract. The
                BTCLP price is formed from the ratio of the amount of BTC in
                staking to the amount of BTCLP assets in circulation. Income in
                BTC is accrued daily and added to the staking pool, while BTCLP
                is not issued.
                <br></br>
                <br></br>
                At any time, you can unstake BTC, i.e. exchange your BTCLP
                assets to BTC assets at a new, increased rate. The difference in
                BTCLP price when you start staking and exit staking will be your
                income. This difference can only be positive. You can find out
                more in the FAQ.
              </p>
            </div>
            <div className="image">
              <img src="./assets/btc stacking.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="last-section">
        <Footer />
        <div className="yona-reserve">
          <span>
            All Rights Are Reserved For{" "}
            <a className="home-link" href="/">
              Yona
            </a>
          </span>
        </div>
      </div>
      <img className="design" src="./assets/Desgin5.svg" />
    </div>
  );
};

export default Stacking;
