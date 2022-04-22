import React, { useState } from "react";
import Buttons from "../Global/Button";
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

const Transaction = () => {
  const [state, setState] = useState({
    table: [
      {
        balance: "-0.00021346",
        Yona: "0.003 Yona",
        date: "2020/03/03 - 19:43",
        code: "3P59T3Vtn8AdGrJEecvEjnoVNC5RM7o2UUo",
      },
      {
        balance: "-0.00021346",
        Yona: "0.003 Yona",
        date: "2020/03/03 - 19:43",
        code: "3P59T3Vtn8AdGrJEecvEjnoVNC5RM7o2UUo",
      },
      {
        balance: "-0.00021346",
        Yona: "0.003 Yona",
        date: "2020/03/03 - 19:43",
        code: "3P59T3Vtn8AdGrJEecvEjnoVNC5RM7o2UUo",
      },
      {
        balance: "-0.00021346",
        Yona: "0.003 Yona",
        date: "2020/03/03 - 19:43",
        code: "3P59T3Vtn8AdGrJEecvEjnoVNC5RM7o2UUo",
      },
      {
        balance: "-0.00021346",
        Yona: "0.003 Yona",
        date: "2020/03/03 - 19:43",
        code: "3P59T3Vtn8AdGrJEecvEjnoVNC5RM7o2UUo",
      },
      {
        balance: "-0.00021346",
        Yona: "0.003 Yona",
        date: "2020/03/03 - 19:43",
        code: "3P59T3Vtn8AdGrJEecvEjnoVNC5RM7o2UUo",
      },
      {
        balance: "-0.00021346",
        Yona: "0.003 Yona",
        date: "2020/03/03 - 19:43",
        code: "3P59T3Vtn8AdGrJEecvEjnoVNC5RM7o2UUo",
      },
    ],
  });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="portfolio transaction">
      <div className="contain">
        <div className="page">
          <div className="btn-wrapper">
            <a href="/portfolio">
              <Buttons name="Portfolio" svg="./assets/bag-white.svg" />
            </a>
            <a className="active" href="/transaction">
              <Buttons name="Transactions" svg="./assets/change.svg" />
            </a>
            <a href="/create-asset">
              <Buttons name="Creat Asset" svg="./assets/plus-white.svg" />
            </a>
          </div>
          <div className="chart">
            <div className="tabs">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Send" {...a11yProps(1)} />
                    <Tab label="Recieve" {...a11yProps(2)} />
                    <Tab label="exchanged" {...a11yProps(3)} />
                    <Tab label="staked Yona" {...a11yProps(4)} />
                    <Tab label="issued" {...a11yProps(5)} />
                    <Tab label="Contract Invocation" {...a11yProps(6)} />
                  </Tabs>
                  <div className="selects">
                    <select id="filters" placeholder="All Active">
                      <option value="filter">Recent</option>
                    </select>
                    <select id="filters" placeholder="All Active">
                      <option value="filter">Export</option>
                    </select>
                  </div>
                </Box>
                <TabPanel value={value} index={0}>
                  <table className="table">
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
                          <td className="balanc">{item.balance}</td>
                          <td className="Yona">{item.Yona}</td>
                          <td className="date">{item.date}</td>
                          <td className="code">{item.code}</td>

                          <img className="dots" src="./assets/Dots.svg" />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Item Three
                </TabPanel>
                <TabPanel value={value} index={4}>
                  Item Three
                </TabPanel>
                <TabPanel value={value} index={5}>
                  Item Three
                </TabPanel>
                <TabPanel value={value} index={6}>
                  Item Three
                </TabPanel>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <img className="design" src="./assets/Desgin-portfolio.svg" />
    </div>
  );
};

export default Transaction;
