import React, { useState, useEffect } from "react";
import Buttons from "../Global/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Footer from "../Global/Footer";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Neutrino = (props) => {
  const [progress, setProgress] = useState(0);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(60);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="stacking1 neutrino">
      <div className="contain">
        <div className="page">
          <div className="heading">
            <h2>Neutrino Pools</h2>
            <div className="assets"></div>
          </div>
          <div className="contents">
            <div className="column">
              <div className="balance">
                <div className="progress">
                  <CircularProgressWithLabel value={progress} />
                  <div className="circle-bg"></div>
                </div>
                <div className="info">
                  <div className="blance">
                    <div className="item">
                      <span className="span active">Aviable Balance</span>
                      <b>0</b>
                    </div>
                  </div>
                  <div className="buttons">
                    <Buttons name="Invest In Pool" />
                  </div>
                </div>
              </div>
              <div className="history">
                <span>My Investments</span>
              </div>
              <div className="ideas">
                <h4>Investment Ideas</h4>
                <div className="items">
                  <div className="heading">
                    <img src="./assets/bitcoin.svg" />
                    <b>BSDN Pool ~ 12.76%</b>
                    <span>
                      <img src="./assets/download.svg" />
                      <img className="open" src="./assets/next (1).svg" />
                    </span>
                  </div>
                  <div className="infos">
                    <div className="span">
                      <span>Estimated Annual Interest</span>
                      <b>12.72%</b>
                    </div>
                    <div className="span">
                      <span>Staking income</span>
                      <b>7.05%</b>
                    </div>
                    <div className="span">
                      <span>Income from Fees</span>
                      <b>5.67%</b>
                    </div>
                    <div className="span">
                      <span>Asset Collateral</span>
                      <b>59,423.598476 USDN</b>
                    </div>
                    <div className="span">
                      <span>Pool Size</span>
                      <b>22,344.835636 USDN</b>
                    </div>
                    <div className="span">
                      <span>My Pool Share</span>
                      <b>0%</b>
                    </div>
                  </div>
                </div>
                <div className="items">
                  <div className="heading">
                    <img src="./assets/bitcoin.svg" />
                    <b>BSDN Pool ~ 12.76%</b>
                    <span>
                      <img src="./assets/download.svg" />
                      <img className="open" src="./assets/next (1).svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column second">
              <div className="wrapper">
                <img className="dollor" src="./assets/dollor.svg" />
                <div className="social">
                  <span>Total Income</span>
                  <b>0</b>
                  <p>What is total income?</p>
                </div>
                <div className="interest">
                  <p>Accumulated for Distribution?</p>
                  <b>$1,368</b>
                  <span>How to stake my funds?</span>
                </div>
              </div>
              <div className="income">
                <div className="buttons">
                  <div className="input">
                    <input type="text" value="Daily Income" />
                    <img src="./assets/next (1).svg" />
                  </div>
                  <div className="input">
                    <input type="text" value="Select Pool" />
                    <img src="./assets/next (1).svg" />
                  </div>
                  <span>?</span>
                </div>
                <div className="chart">
                  {/* <div className="y-row">
                    <span>0.4</span>
                    <span>0.3</span>
                    <span>0.2</span>
                    <span>0.1</span>
                    <span>0</span>
                  </div>
                  <div className="image-chart">
                    <img src="./assets/Liner Chart1.svg" />
                  </div>
                  <div className="x-row">
                    <span>21 Jun</span>
                    <span>12 Aug</span>
                    <span>03 Oct</span>
                    <span>24 Nov</span>
                    <span>15 Jan</span>
                    <span>18 Mar</span>
                    <span>26 Apr</span>
                  </div> */}
                  <img src="./assets/Chart-input.svg" />
                </div>
              </div>
              <div className="history">
                <span>My Investments</span>
              </div>
            </div>
            <div className="information">
              <div className="item">
                <div className="pic">
                  <img src="./assets/copyright.svg" />
                </div>
                <span>Buy USDN assets</span>
              </div>
              <img className="arrow" src="./assets/big-arrow.svg" />
              <div className="item">
                <img src="./assets/engineering.svg" />
                <span>Stake USDN asset</span>
              </div>
              <img className="arrow" src="./assets/big-arrow.svg" />
              <div className="item">
                <img src="./assets/electrical-threshold.svg" />
                <span>Done! Receive USDN interest daily</span>
              </div>
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

export default Neutrino;
