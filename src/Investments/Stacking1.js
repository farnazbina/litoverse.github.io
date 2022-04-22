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

const Stacking1 = (props) => {
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
    <div className="stacking1">
      <div className="contain">
        <div className="page">
          <div className="heading">
            <h2>USDT Stacking</h2>
            <div className="assets"></div>
          </div>
          <div className="contents">
            <div className="column">
              <div className="balance">
                <img className="dollor" src="./assets/dollor.svg" />
                <div className="total-balance">
                  <span>Total Balance</span>
                  <b>0</b>
                </div>
                <div className="buttons">
                  <button className="credit">
                    <img src="./assets/creditcard.svg" />
                  </button>
                  <button className="swap">
                    <img src="./assets/swap.svg" />
                    <span>Swap</span>
                  </button>
                  <button className="coins">
                    <img src="./assets/coins.svg" />
                  </button>
                  <span className="top-up">How to top up the balance?</span>
                </div>
              </div>
              <div className="balance-stack">
                <div className="progress">
                  <CircularProgressWithLabel value={progress} />
                  <div className="circle-bg"></div>
                </div>
                <div className="blance">
                  <div className="item">
                    <span className="span active">Aviable Balance</span>
                    <b>0</b>
                  </div>
                  <div className="item">
                    <span className="span">Staked Balance</span>
                    <b>0</b>
                  </div>
                </div>
                <div className="buttons">
                  <Buttons name="Stake USD" />
                  <Buttons name="Unstake USD" />
                </div>
              </div>
              <div className="otc-service">
                <div className="contnt">
                  <h4>OTC-Service</h4>
                  <p>For premium clients with a stake greater than 10k USD.</p>
                </div>
                <Buttons name="Use Service" />
              </div>
              <div className="referal">
                <div className="contnt">
                  <h4>Referral Link</h4>
                  <p>
                    https://waves.exchange?ref=3PDZG4gioaW6CArTdUjyMZWwM3QngyfRSh1
                    <img src="./assets/copyicon.svg" />
                  </p>
                  <span>
                    <a href="/">Want to earn more?</a>
                  </span>
                </div>
                <div className="info">
                  <div className="item">
                    <img src="./assets/users-alt.svg" />
                    <div className="spans">
                      <span>Total Referrals</span>
                      <b>0</b>
                    </div>
                  </div>
                  <div className="item">
                    <img src="./assets/analisiss.svg" />
                    <div className="spans">
                      <span>Active Referrals</span>
                      <b>0</b>
                    </div>
                  </div>
                  <div className="item">
                    <img src="./assets/coins.svg" />
                    <div className="spans">
                      <span>Income from Referrals</span>
                      <b>0</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="wrapper">
                <img className="dollor" src="./assets/dollor.svg" />
                <div className="social">
                  <img src="./assets/facebook.svg" />
                  <img src="./assets/linkedin(1).svg" />
                  <img src="./assets/twitter.svg" />
                  <span>Total Balance</span>
                  <b>0</b>
                </div>
                <div className="interest">
                  <p>Estimated Annual Interest</p>
                  <b>8.63%</b>
                  <span>How to stake my funds?</span>
                </div>
              </div>
              <div className="income">
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Daily income" {...a11yProps(0)} />
                      <Tab label="Weekly Income" {...a11yProps(1)} />
                      <Tab label="Monthly Income" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <div className="chart">
                      <div className="y-row">
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
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    
                  </TabPanel>
                </Box>
              </div>
              <div className="history">
                <span>Payouts History</span>
              </div>
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

export default Stacking1;
