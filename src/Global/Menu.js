import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popup from "../Popups/Popup";
import Setting from "./SettingPopup";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Buttons from "./Button";

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

const Menu = () => {
  const [state, setState] = useState({
    popupStatus: false,
    user: false,
    setting: false,
    userSetting: false,
    switchAcount: false
  });
  const [isMobile, setIsMobile] = useState(false);
  const [acount, setAcount] = useState(false);
  const popupStatusHandler = () => {
    setState({
      ...state,
      popupStatus: !state.popupStatus,
    });
  };
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const UserProfile = () => {
    setState({
      ...state,
      user: !state.user,
    });
    console.log("hello");
  };

  const AddAcount = () => {
    setState({
      ...state,
      switchAcount: !state.switchAcount
    })
  };

  const SettingPopup = () => {
    console.log("dvsdvsdvsdv");
    setState({
      ...state,
      setting: !state.setting,
    });
  };

  return (
    <div className="menu">
      <React.Fragment>
        <Popup
          active={state.setting}
          class="setting"
          title="Settings"
          popupStatus={SettingPopup}
        >
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              height: 224,
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="General" {...a11yProps(0)} />
              <Tab label="Security" {...a11yProps(1)} />
              <Tab label="Network" {...a11yProps(2)} />
              <Tab label="Info" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <div className="general">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Advanced features"
                />
                <div className="selects">
                  <span className="name">Language</span>
                  <span>
                    <img className="flag" src="./assets/england.svg" />
                    English <img src="./assets/next (1).svg" />
                  </span>
                </div>
                <div className="selects">
                  <span className="name">Session timeout in</span>
                  <span>
                    1 hour <img src="./assets/next (1).svg" />
                  </span>
                </div>
                <div className="selects">
                  <span className="name">Current height</span>
                  <span>
                    2282448 <img src="./assets/next (1).svg" />
                  </span>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="security">
                <label for="phrase">
                  <b>Seed Phrase</b>
                  <span>Copy</span>
                </label>
                <input
                  className="address"
                  type="text"
                  id="phrase"
                  name="fav_language"
                  placeholder="rabbit slot habit oval measure unable gallery tray urge burden verb accident sunset happy"
                />
                <label for="seed">
                  <b>Encoded Seed Phrase</b>
                  <span>Copy</span>
                </label>
                <input
                  className="address"
                  type="text"
                  id="seed"
                  name="fav_language"
                />
                <div className="selects">
                  <span className="name">Address</span>
                  <span>3P59T3Vtn8AdGrJEecvEjnoVNC5RM7o2UUo</span>
                </div>
                <div className="selects pair">
                  <span className="name">Export Account to App</span>
                  <button>Show Pairing Code</button>
                </div>
                <div className="selects pair">
                  <span className="name">Password</span>
                  <button>Change Password</button>
                </div>
                <div className="selects remove">
                  <span className="name">Account</span>
                  <button>Remove Account</button>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="security">
                <label for="node">
                  <b>Node address</b>
                  <span>Copy</span>
                </label>
                <input
                  className="address"
                  type="text"
                  id="node"
                  name="fav_language"
                  placeholder="https://nodes.waves.exchange"
                />
                <label class="data" for="data">
                  <b>Data provider</b>
                  <span>Copy</span>
                  <img src="./assets/warning.svg" />
                </label>
                <input
                  className="address"
                  type="text"
                  id="data"
                  name="fav_language"
                  placeholder="3P6t5mKGwVDkyjFhtUqw4NnecyC3DRpLfkw"
                />
                <div class="check">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Don't show suspicious assets"
                  />
                  <Buttons name="Set Default" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="security">
                <div className="selects remove">
                  <span className="name">Version</span>
                  <span className="yona">Yona 1.23.6</span>
                </div>
                <div className="selects remove">
                  <span className="name">Support</span>
                  <span className="legal">support.talan.com</span>
                </div>
                <div className="selects remove">
                  <span className="name">Legal</span>
                  <span className="legal">
                    Terms and Conditions<b>|</b>Privacy Policy
                  </span>
                </div>
                <div className="selects remove">
                  <span className="name">© 2020 Yona</span>
                  <span>
                    <img className="logo" src="./assets/logo.svg" />
                  </span>
                </div>
              </div>
            </TabPanel>
          </Box>
        </Popup>
      </React.Fragment>
      <Popup
        active={state.user}
        popupStatus={UserProfile}
        class="user-change"
        title="Your Address"
      >
        <div className="dropdown">
          <div className="change-acount">
            <div className="input1">
              <label for="address">Your address</label>
              <input
                className="address"
                type="text"
                id="address"
                name="fav_language"
              />
              <img className="pro" src="./assets/profile.png" />
              <img className="copy" src="./assets/copyicon.svg" />
            </div>
            <div className="input2">
              <label for="name">Aliases i</label>
              <input
                className="name"
                type="text"
                id="name"
                name="fav_language"
              />
              <span>Creat New</span>
            </div>
            <p>
              Transaction Fee<b>1 Yona ?</b>
            </p>
          </div>
        </div>
      </Popup>
      <div className="logo">
        <div className="image">
          <img src="./assets/Logo.svg" />
        </div>
        <div className="name">
          <strong>Yona</strong>
          <span>A Great Website</span>
        </div>
      </div>
      <div className={isMobile ? "items-mobile" : "items"}>
        <ul>
          <li>
            <a href="/stacking-landing">Landing</a>
          </li>
          <li>
            <a href="/">Trading</a>
          </li>
          <li>
            <a href="/">DeFo</a>
          </li>
          <li>
            <a href="/">NEW</a>
          </li>
          <li className="invest">
            <a href="/investments">Investments</a>
            <div className="invest-menu">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Lambo Investments" {...a11yProps(0)} />
                    <Tab label="Algorithmic Trading" {...a11yProps(1)} />
                    <Tab label="LP Staking" {...a11yProps(2)} />
                    <Tab label="Neutrino Staking" {...a11yProps(3)} />
                    <Tab label="Other Products" {...a11yProps(4)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <div className="detail">
                    <div className="item checked">
                      <img src="./assets/btccc.svg " />
                      <b>BTC</b>
                      <span>Apy ~ 4.19%</span>
                    </div>
                    <div className="item">
                      <img src="./assets/bitcoin.svg " />
                      <b>BTC</b>
                      <span>Apy ~ 4.19%</span>
                    </div>
                    <div className="item">
                      <img src="./assets/bitcoin.svg " />
                      <b>BTC</b>
                      <span>Apy ~ 4.19%</span>
                    </div>
                    <div className="item">
                      <img src="./assets/bitcoin.svg " />
                      <b>BTC</b>
                      <span>Apy ~ 4.19%</span>
                    </div>
                    <div className="item">
                      <img src="./assets/bitcoin.svg " />
                      <b>BTC</b>
                      <span>Apy ~ 4.19%</span>
                    </div>
                    <div className="item">
                      <img src="./assets/bitcoin.svg " />
                      <b>BTC</b>
                      <span>Apy ~ 4.19%</span>
                    </div>
                    <div className="item">
                      <img src="./assets/bitcoin.svg " />
                      <b>BTC</b>
                      <span>Apy ~ 4.19%</span>
                    </div>
                    <div className="item">
                      <img src="./assets/bitcoin.svg " />
                      <b>BTC</b>
                      <span>Apy ~ 4.19%</span>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="transaction"></div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <div className="transaction"></div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <div className="transaction"></div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <div className="transaction"></div>
                </TabPanel>
              </Box>
            </div>
          </li>
          <li>
            <a href="/">Leverage</a>
          </li>
          <li>
            <a href="/wallet">Wallet</a>
          </li>
        </ul>
        <div className="register">
          <div className="notify">
            <img src="./assets/alert.svg" />
          </div>
          {/* <div className="button-ylw">
          <Button variant="text">Log in</Button>
        </div> */}
          <div className="user">
            <div className="image">
              <img src="./assets/Profile.png" />
            </div>
            <div className="name">
              <h5>Alex Desoza</h5>
              <span>3P59T3****7o2UUo</span>
              <img src="./assets/next (1).svg" />
            </div>
            <div className="dropdown">
              <div className="useracount">
                <img src="./assets/profile.png" />
                <div className="ID">
                  <span>Alex Desoza</span>
                  <p>
                    3P59T3Vtn8AdGrJEecvEjnoVNC5RM7o2UUo
                    <img src="./assets/copyicon.svg" />
                  </p>
                </div>
              </div>
              <div className="menu-items">
                <button type="button" onClick={UserProfile}>
                  <img src="./assets/user.svg" />
                  Aliases
                </button>
                <button
                  className="acount"
                  onClick={AddAcount}
                >
                  <img src="./assets/uil_users-alt-1.svg" />
                  Switch Acount
                  <img className="next" src="./assets/next(1).svg" />
                  {state.switchAcount ? (
                    <div className="add-acount">
                      <span className="back">
                        <img src="./assets/arrow-left.svg" />
                        Menu
                      </span>
                      <div className="title">
                        <img src="./assets/profile.png" />
                        <div className="sub-title">
                          <span>
                            Alex Desoza<b>ACTIVE</b>
                          </span>
                          <p>3P59T3Vtn8AdGrJEecvEjnoVNC5RM7o2UUo</p>
                        </div>
                        <div className="add">
                          <img src="./assets/add.svg" />
                          <span>Add Account</span>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </button>
                <button type="button" onClick={SettingPopup}>
                  <img src="./assets/setting.svg" />
                  Settings
                </button>
                <span>
                  <img src="./assets/exit.svg" />
                  Exit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="mobile-menu-icon">
        <img src="./assets/menu.svg" />
      </button>
    </div>
  );
};

export default Menu;
