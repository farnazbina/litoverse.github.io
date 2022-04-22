import React from "react";
import Buttons from "../../Global/Button";
import Slider from "@mui/material/Slider";
import StackBenefits from "../StackBenefits";
import Comments from "./UserComments";
import StackFund from "./StackFund";
import Media from "./Media";
import Contact from "./Contact";
import Footer from "../../Global/Footer";

const LandingStacking = () => {
  return (
    <div className="landing">
      <div className="intro">
        <div className="contents">
          <h1>Earn 12-15% a year in USD just for holding coins</h1>
          <p>Daily payouts. Any duration. Withdraw any time.</p>
          <Buttons name="Stack Now" />
        </div>
        <div className="image">
          <img src="./assets/Video.svg" />
        </div>
        <img className="design1" src="assets/Design 1.svg" />
      </div>
      <div className="deposits">
        <div className="title">
          <h1>
            Staking is a new way of depositing funds based on the blockchain
            economy
          </h1>
          <img src="./assets/Lines1.svg" />
        </div>
        <div className="items">
          <div className="column bank">
            <h3>BANK DEPOSIT</h3>
            <ul>
              <li>
                0.1-1% interest in USD
                <img src="./assets/cross.svg" />
              </li>
              <li>
                You give your money to the bank
                <img src="./assets/cross.svg" />
              </li>
              <li>
                Require extensive documentation and investigation
                <img src="./assets/cross.svg" />
              </li>
              <li>
                Withdrawal is either forbidden or leads to the loss of the
                accrued interest
                <img src="./assets/cross.svg" />
              </li>
              <li>
                Replenishment is often forbidden
                <img src="./assets/cross.svg" />
              </li>
              <li>
                Interest paid monthly
                <img src="./assets/cross.svg" />
              </li>
            </ul>
          </div>
          <div className="vs">VS</div>
          <div className="column stack">
            <h3>STAKING</h3>
            <ul>
              <li>
                <img src="./assets/tick.svg" />
                12-15% interest in USD
              </li>
              <li>
                <img src="./assets/tick.svg" />
                Full control of your funds
              </li>
              <li>
                <img src="./assets/tick.svg" />
                Complete anonymity. No documents needed
              </li>
              <li>
                <img src="./assets/tick.svg" />
                Partial or full withdrawal at any time without losing accrued
                interest
              </li>
              <li>
                <img src="./assets/tick.svg" />
                Replenishment is allowed
              </li>
              <li>
                <img src="./assets/tick.svg" />
                Interest paid daily
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contain">
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
                variations. An example of calculating interest on staking is for
                informational purposes.
              </p>
              <div className="image">
                <img src="./assets/Yield.svg" />
              </div>
            </div>
            <div className="income">
              <span className="title">How many BTC do you want to stake?</span>
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
      </div>
      <div className="otc-service">
        <div className="contain">
          <div className="contents">
            <h1>OTC Service</h1>
            <p>
              Exchange your USDT via OTC and stake it. Receive 12-15% of annual
              interest with USDN staking. You can exchange back to USDT at any
              time at rate 1:1 without losing interest.
            </p>
            <ul>
              <li>
                Exchange amounts over 10k USDT to USDN and vice versa at any
                time at the rate of 1:1.
              </li>
              <li>Service security is ensured by a smart contract.</li>
              <li>
                You only pay OTC fee (2% fee when you exchange USDT to USDN and
                2% fee when you exchange USDN back to USDT).
              </li>
              <li>
                After using the service, you'll be assigned a personal manager
                to help you with any questions 24/7.
              </li>
              <li>Get 12-15% of annual interest with USDN staking.</li>
            </ul>
            <Buttons name="GO to OTC" />
          </div>
        </div>
      </div>
      <div className="contain">
        <div className="information">
          <div className="item">
            <img src="./assets/users-alt.svg" />
            <div className="spans">
              <span>Total Clients</span>
              <b>3.1K+</b>
            </div>
          </div>
          <div className="item">
            <img src="./assets/btc.svg" />
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
        <div className="opportunity">
          <h1>Next-generation Savings Opportunity</h1>
          <p>
            In recent times, keeping your savings in bank deposits hasn't always
            proven a good idea. Interest rates are low, especially when it comes
            to short-term deposits, and the process of withdrawing your funds
            can be unnecessarily complicated.
            <br></br>
            <br></br>
            Staking cryptocurrency provides an opportunity to securely store
            your funds, while at the same time earning substantial passive
            income. When staking crypto, you retain total control of your funds,
            since no one but you has access to your crypto assets. At any time,
            you can add more funds to your deposit or withdraw your crypto
            assets – fully or partially – without losing any accrued interest.
          </p>
        </div>
      </div>
      <div className="benefits-section">
        <div className="contain">
          <StackBenefits />
        </div>
      </div>
      <div className="contain">
        <Comments />
      </div>
      <div className="contain">
        <div className="crypto-stack">
          <h1>Best Crypto Staking</h1>
          <p>
            Yona offers one of the best crypto staking opportunities in the
            market. Waves staking is centered on USDN, a stablecoin pegged to
            the US dollar. USDN staking is secure, and the deposit process is
            very straightforward – you can buy USDN with your credit card or
            with any other crypto. All it takes is just a few clicks
            <br></br>. USDN staking pays annual interest of 12-15%, which is
            considerably higher than any US dollar bank deposit.
            <br></br>
            <br></br> Do you want to learn how staking works on Waves.Exchange?
            Go ahead and earn passive income of 12-15% annually!
          </p>
        </div>
      </div>
      <div className="watch-video">
        <div className="contain">
          <StackFund />
        </div>
      </div>
      <div className="contain">
        <Media />
      </div>
      <div className="referal">
        <div className="contain">
          <Contact />
        </div>
      </div>
      <div className="last-section">
          <Footer />
          <div className="yona-reserve">
            <span>All Rights Are Reserved For <a className="home-link" href="/">Yona</a></span>
          </div>
        </div>
    </div>
  );
};

export default LandingStacking;
