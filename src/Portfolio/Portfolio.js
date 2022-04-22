import React, { useState } from "react";
import Buttons from "../Global/Button";
import RecieveBitcoins from "./RecievePopup";
import SendBitcoins from "./SendPopup";
import Popup from "../Popups/Popup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

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

const Portfolio = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [state, setState] = useState({
    table: [
      {
        balance: "0.00021346",
        reserved: "0.00000000",
        value: "0.00",
        price: "$2.12",
        change: "-1.25%",
        chart: "./assets/image 1.svg",
      },
      {
        balance: "0.00021346",
        reserved: "0.00000000",
        value: "0.00",
        price: "$2.12",
        change: "-1.25%",
        chart: "./assets/image 1.svg",
      },
      {
        balance: "0.00021346",
        reserved: "0.00000000",
        value: "0.00",
        price: "$2.12",
        change: "-1.25%",
        chart: "./assets/image 1.svg",
      },
      {
        balance: "0.00021346",
        reserved: "0.00000000",
        value: "0.00",
        price: "$2.12",
        change: "-1.25%",
        chart: "./assets/image 1.svg",
      },
      {
        balance: "0.00021346",
        reserved: "0.00000000",
        value: "0.00",
        price: "$2.12",
        change: "-1.25%",
        chart: "./assets/image 1.svg",
      },
      {
        balance: "0.00021346",
        reserved: "0.00000000",
        value: "0.00",
        price: "$2.12",
        change: "-1.25%",
        chart: "./assets/image 1.svg",
      },
    ],
    recievePopup: false,
    sendPopup: false,
    infoPopup: false
  });
  const RecievePopup = () => {
    setState({
      ...state,
      recievePopup: !state.recievePopup,
    });
  };

  const SendPopup = () => {
    setState({
      ...state,
      sendPopup: !state.sendPopup,
    });
  };

  const InfoPopup = () => {
    setState({
      ...state,
      infoPopup: !state.infoPopup,
    });
  };

  return (
    <div className="portfolio">
      <React.Fragment>
        <Popup
          active={state.sendPopup}
          class="send-bitcoin"
          title="Send Bitcoins"
          popupStatus={SendPopup}
        >
          <div className="box">
            <div className="input1">
              <label for="address">Recipient</label>
              <input
                className="address"
                type="text"
                id="address"
                name="fav_language"
                placeholder="Past Bitcoin Address"
              />
            </div>
            <div className="input2">
              <label for="name">
                <span>Amount</span>
                <b>Max</b>
              </label>
              <input
                className="name"
                type="text"
                id="name"
                name="fav_language"
                placeholder="Enter amount"
              />
              <div className="hint">
                <span>
                  Equal to<b>0.00 USD</b>
                </span>
                <span>
                  Transaction Fee<b>0.001 Yona</b>
                </span>
              </div>
            </div>
            <div className="input3">
              <label for="name">Description</label>
              <input
                className="name"
                type="text"
                id="name"
                name="fav_language"
                placeholder="Write messages ..."
              />
            </div>
            <div className="buttons">
              <Button onClick={SendPopup} className="cancel" variant="text">
                Cancel
              </Button>
              <Button className="continue" variant="text">
                Continue
              </Button>
            </div>
          </div>
        </Popup>
      </React.Fragment>
      <React.Fragment>
        <Popup
          active={state.infoPopup}
          class="asset"
          title="Asset Info"
          popupStatus={InfoPopup}
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
          active={state.recievePopup}
          class="recieve-bitcoin"
          title="Recieve Bitcoins"
          popupStatus={RecievePopup}
        >
          <div className="box">
            <div className="asset">
              <span>Asset</span>
            </div>
            <div className="send">
              <div className="spans">
                <b>Send Bitcoins to ?</b>
                <span>3P59T3Vtn8AdGrJEecvEjnoVNC5RM7o2UUo</span>
              </div>
              <img src="./assets/copy.svg" />
            </div>
            <div className="image">
              <img src="./assets/scan qr.png" />
            </div>
          </div>
        </Popup>
      </React.Fragment>
      <div className="contain">
        <div className="page">
          <div className="btn-wrapper">
            <a className="active" href="/portfolio">
              <Buttons name="Portfolio" svg="./assets/bag.svg" />
            </a>
            <a href="/transaction">
              <Buttons name="Transactions" svg="./assets/arrow-white.svg" />
            </a>
            <a href="/create-asset">
              <Buttons name="Creat Asset" svg="./assets/plus-white.svg" />
            </a>
          </div>
          <div className="inputs">
            <div className="saech">
              <img src="./assets/search.svg" />
              <input type="search" placeholder="Search" />
            </div>
            <div className="filter">
              <img src="./assets/filter.svg" />
              <select id="filters" placeholder="All Active">
                <option value="filter">All Active</option>
              </select>
            </div>
          </div>
          <div className="chart">
            <table className="table">
              <thead className="heading">
                <tr>
                  <th className="name">ASSET NAME</th>
                  <th className="balance">BALANCE</th>
                  <th className="reserve">RESERVED</th>
                  <th className="value">VALUE, USD</th>
                  <th className="price">PRICE USD</th>
                  <th className="change">24H CHANGE</th>
                  <th className="empty"></th>
                </tr>
              </thead>
              <tbody className="main">
                {state.table.map((item) => (
                  <tr>
                    <td className="name">
                      <>
                        <img src="./assets/vector-btc.svg" />
                        <span>BTC</span>
                        <span className="status">GATEWAY</span>
                      </>
                    </td>
                    <td className="balance">{item.balance}</td>
                    <td className="reserve">{item.reserved}</td>
                    <td className="value">{item.value}</td>
                    <td className="price">
                      <span>{item.price}</span>
                      <img src={item.chart} />
                    </td>
                    <td className="change">{item.change}</td>
                    <td className="empty">
                      <div className="buttons">
                        <button onClick={SendPopup} className="decrease">
                          <img src="./assets/arrow-bottom.svg" />
                        </button>
                        <button onClick={RecievePopup} className="increase">
                          <img src="./assets/arrow-top.svg" />
                        </button>
                        <button className="card">
                          <img src="./assets/change-alt.svg" />
                        </button>
                        <img onClick={InfoPopup} className="dots" src="./assets/Dots.svg" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <img className="design" src="./assets/Desgin-portfolio.svg" />
    </div>
  );
};

export default Portfolio;
