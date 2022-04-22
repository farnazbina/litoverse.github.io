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

const Stacking2 = (props) => {
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
    <div className="stacking1 second">
      <div className="contain">
        <div className="page">
          <div className="heading">
            <h2>NSBT Stacking</h2>
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
                  <button className="swap">
                    <img src="./assets/swap.svg" />
                    <span>Swap</span>
                  </button>
                  <button className="coins">
                    <img src="./assets/coins.svg" />
                  </button>
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
              <div className="benefits">
                <div className="content">
                  <h3>Benefits of investing in NSBT</h3>
                  <p>
                    By investing in NSBT staking, you receive passive income in
                    several different assets at once:
                    <br></br>•<br></br>• USDN is a unique algorithmic stable
                    coin, the price of which is always equal to 1 USD. • WAVES
                    is the main asset of the Waves blockchain. • DeFo assets are
                    stable coins based on the Neutrino protocol.
                    <br></br>•<br></br>
                    •In addition, NSBT holders get the power to influence
                    decisions concerning the Neutrino protocol. It is important
                    to note that if there is a surplus on the contract, the
                    contract guarantees that it will buy the unlimited amount of
                    your NSBT at any time at a price of 1 USDN. Thus, you are
                    insured against the complete loss of your investment.
                  </p>
                </div>
                <div className="image">
                  <img src="./assets/bill.svg" />
                </div>
              </div>
            </div>
            <div className="column">
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
              <span>Buy NSBT assets</span>
            </div>
            <img className="arrow" src="./assets/big-arrow.svg" />
            <div className="item">
              <img src="./assets/engineering.svg" />
              <span> Stake NSBT asset</span>
            </div>
            <img className="arrow" src="./assets/big-arrow.svg" />
            <div className="item">
              <img src="./assets/electrical-threshold.svg" />
              <span>Done! Receive NSBT interest daily</span>
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

export default Stacking2;
