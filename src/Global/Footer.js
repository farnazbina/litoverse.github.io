import React from "react";
import Buttons from "./Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contain">
        <div className="wrapper">
          <div className="about-yona">
            <div className="logo">
              <a href="/">
                <div className="image">
                  <img src="./assets/Logo.svg" />
                </div>
                <div className="name">
                  <strong>Yona</strong>
                  <span>A Great Website</span>
                </div>
              </a>
            </div>
            <div className="info">
              <span>©2020 Yona</span>
              <span>support@Yona.com</span>
              <p>
                By subscribing, you will receive emails about Yona products and
                you agree to our <a href="/">Terms and Conditions</a> and{" "}
                <a href="/">Privacy Policy</a>.
              </p>
            </div>
            <div className="email">
              <input type="email" placeholder="Email*" />
              <Buttons name="Subscribe" />
            </div>
          </div>
          <div className="contents">
            <span className="title">PRODUCTS</span>
            <ul>
              <li>
                <a href="/">USDN Staking</a>
              </li>
              <li>
                <a href="/">OTC Service</a>
              </li>
              <li>
                <a href="/">Yona Staking</a>
              </li>
              <li>
                <a href="/">DeFo Staking</a>
              </li>
              <li>
                <a href="/">Neutrino Governance</a>
              </li>
              <li>
                <a href="/">Leverage</a>
              </li>
              <li>
                <a href="/">DeFo</a>
              </li>
            </ul>
          </div>
          <div className="contents">
            <span className="title">TOOLS</span>
            <ul>
              <li>
                <a href="/">Yona Blockchain</a>
              </li>
              <li>
                <a href="/">Yona Explorer</a>
              </li>
            </ul>
            <span className="title row">SUPPORT</span>
            <ul>
              <li>
                <a href="/">Support center</a>
              </li>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Market Maker Program</a>
              </li>
            </ul>
          </div>
          <div className="contents">
            <span className="title">LEARN</span>
            <ul>
              <li>
                <a href="/">USDN Staking FAQ</a>
              </li>
              <li>
                <a href="/">OTC Service FAQ</a>
              </li>
              <li>
                <a href="/">WAVES Staking FAQ</a>
              </li>
              <li>
                <a href="/">DeFo Staking FAQ</a>
              </li>
              <li>
                <a href="/">NSBT FAQ</a>
              </li>
              <li>
                <a href="/">DeFo FAQ</a>
              </li>
              <li>
                <a href="/">Customer FAQ</a>
              </li>
            </ul>
          </div>
          <div className="contents">
            <span className="title">SOCIAL</span>
            <ul>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Telegram</a>
              </li>
            </ul>
            <span className="title row">BUY CRYPTO</span>
            <ul>
              <li>
                <a href="/">Buy BTC</a>
              </li>
              <li>
                <a href="/">Buy Yona</a>
              </li>
              <li>
                <a href="/">Buy USDN</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
