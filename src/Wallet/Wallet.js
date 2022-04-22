import React, { useState } from "react";
import Buttons from "../Global/Button";
import Exchange from "./Common/Exchange";
import Popup from "../Popups/Popup";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

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

const Wallet = (props) => {
  const [state, setState] = useState({
    exchange: [
      {
        icon: "./assets/vector-btc.svg",
        name: "BTC",
        status: "GATEWAY",
        amount: "0.00012",
      },
      {
        icon: "./assets/vector-btc.svg",
        name: "BTC",
        status: "GATEWAY",
        amount: "0.00012",
      },
      {
        icon: "./assets/vector-btc.svg",
        name: "BTC",
        status: "GATEWAY",
        amount: "0.00012",
      },
      {
        icon: "./assets/vector-btc.svg",
        name: "BTC",
        status: "GATEWAY",
        amount: "0.00012",
      },
      {
        icon: "./assets/vector-btc.svg",
        name: "BTC",
        status: "GATEWAY",
        amount: "0.00012",
      },
      {
        icon: "./assets/vector-btc.svg",
        name: "BTC",
        status: "GATEWAY",
        amount: "0.00012",
      },
      {
        icon: "./assets/vector-btc.svg",
        name: "BTC",
        status: "GATEWAY",
        amount: "0.00012",
      },
      {
        icon: "./assets/vector-btc.svg",
        name: "BTC",
        status: "GATEWAY",
        amount: "0.00012",
      },
      {
        icon: "./assets/vector-btc.svg",
        name: "BTC",
        status: "GATEWAY",
        amount: "0.00012",
      },
      {
        icon: "./assets/vector-btc.svg",
        name: "BTC",
        status: "GATEWAY",
        amount: "0.00012",
      },
    ],
    popupStatus: false,
    assets: false,
    addAssets: false,
  });

  const AssetInfoPopup = () => {
    setState({
      ...state,
      assets: !state.assets,
    });
  };

  const AddAssetPopup = () => {
    setState({
      ...state,
      addAssets: !state.addAssets,
    });
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <React.Fragment>
        <Popup
          active={state.assets}
          class="asset"
          title="Asset Info"
          popupStatus={AssetInfoPopup}
        >
          <div className="contents">
            <div className="chart-base">
              <div className="names">
                <img src="./assets/vector-btc.svg" />
                <span>BTC</span>
                <span className="status">GATEWAY</span>
              </div>
              <img className="chart" src="./assets/Chart-1.svg" />
            </div>
            <div className="tabs">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="details" {...a11yProps(0)} />
                    <Tab label="balance" {...a11yProps(1)} />
                    <Tab label="transactions" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <div className="detail">
                    <span className="rows">
                      Name<b>Yona</b>
                    </span>
                    <span className="rows">
                      Name<b>Yona</b>
                    </span>
                    <span className="rows">
                      Name<b>Yona</b>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="balance">
                    <img src="./assets/progress.svg" />
                    <div className="info">
                      <b>Total</b>
                      <span>0.000215</span>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <div className="transaction"></div>
                </TabPanel>
              </Box>
            </div>
          </div>
        </Popup>
      </React.Fragment>
      <React.Fragment>
        <Popup
          active={state.addAssets}
          class="add-asset"
          title="Select the assets you want to pin"
          popupStatus={AddAssetPopup}
        >
          <div className="add-asset">
            <div className="content">
              <div className="search">
                <input type="search" placeholder="Type asset name or id" />
                <img src="./assets/search.svg" />
              </div>
              <div className="resuls">
                <ul>
                  <li>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label={
                        <div className="label">
                          <img src="./assets/bitcoin.svg" />
                          <div className="info">
                            <b>BTC</b>
                            <p>34N9YcEETLWn93qYQ64EsP1x89tSruJU44RrEMSXXEPJ</p>
                          </div>
                        </div>
                      }
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label={
                        <div className="label">
                          <img src="./assets/bitcoin.svg" />
                          <div className="info">
                            <b>BTC</b>
                            <p>34N9YcEETLWn93qYQ64EsP1x89tSruJU44RrEMSXXEPJ</p>
                          </div>
                        </div>
                      }
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label={
                        <div className="label">
                          <img src="./assets/bitcoin.svg" />
                          <div className="info">
                            <b>BTC</b>
                            <p>34N9YcEETLWn93qYQ64EsP1x89tSruJU44RrEMSXXEPJ</p>
                          </div>
                        </div>
                      }
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label={
                        <div className="label">
                          <img src="./assets/bitcoin.svg" />
                          <div className="info">
                            <b>BTC</b>
                            <p>34N9YcEETLWn93qYQ64EsP1x89tSruJU44RrEMSXXEPJ</p>
                          </div>
                        </div>
                      }
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label={
                        <div className="label">
                          <img src="./assets/bitcoin.svg" />
                          <div className="info">
                            <b>BTC</b>
                            <p>34N9YcEETLWn93qYQ64EsP1x89tSruJU44RrEMSXXEPJ</p>
                          </div>
                        </div>
                      }
                    />
                  </li>
                </ul>
              </div>

              <div className="buttons">
                <Button
                  className="cancel"
                  variant="text"
                  onClick={AddAssetPopup}
                >
                  Cancel
                </Button>
                <Button className="continue" variant="text">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </Popup>
      </React.Fragment>
      <div className="contain">
        <div className="wallet">
          <div className="btn-wrapper">
            <a href="/portfolio">
              <Buttons name="Portfolio" svg="./assets/bag-white.svg" />
            </a>
            <a href="/transaction">
              <Buttons name="Transactions" svg="./assets/arrow-white.svg" />
            </a>
            <a href="/create-asset">
              <Buttons name="Creat Asset" svg="./assets/plus-white.svg" />
            </a>
          </div>
          <div className="table">
            <div className="heading">
              <div className="exchanges">
                <span className="active">Yona • $2.44</span>
                <span>Bitcoin • $11,370.73</span>
                <span>Ethereum • $373.61</span>
              </div>
              <div className="duration">
                <span>1D</span>
                <span>1W</span>
                <span className="active">1M</span>
              </div>
            </div>
            <div className="balance">
              <div className="item">
                <strong>$ 2.44</strong>
                <span>PRICE Yona</span>
              </div>
              <div className="item">
                <strong>-$ 0.06</strong>
                <span>SINCE LAST MONTH (USD)</span>
              </div>
              <div className="item">
                <strong>-2.36%</strong>
                <span>SINCE LAST MONTH (%)</span>
              </div>
            </div>
            <div className="chart">
              <img src="./assets/Chart-balance.svg" />
              <div className="amount">
                <b>$ 2.44</b>
                <span>25/06/2020 15:36</span>
              </div>
            </div>
          </div>
          <div className="items">
            {state.exchange.map((item) => (
              <Exchange
                icon={item.icon}
                name={item.name}
                status={item.status}
                amount={item.amount}
                info={AssetInfoPopup}
              />
            ))}
            <div className="add-exchange" onClick={AddAssetPopup}>
              <img src="/assets/plus-big.svg" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Wallet;
