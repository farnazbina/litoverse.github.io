import React, { useState } from "react";
import Popup from "../Popups/Popup";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Buttons from "./Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Setting = () => {
  const [state, setState] = useState({
    setting: false,
  });
  const popupStatusHandler = () => {
    setState({
      ...state,
      setting: !state.setting,
    });
  };
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Popup
        active={state.setting}
        class="setting"
        title="Settings"
        popupStatus={popupStatusHandler}
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
                <span className="legal">Terms and Conditions<b>|</b>Privacy Policy</span>
              </div>
              <div className="selects remove">
                <span className="name">© 2020 Yona</span>
                <span><img className="logo" src="./assets/logo.svg" /></span>
              </div>
            </div>
          </TabPanel>
        </Box>
      </Popup>
    </React.Fragment>
  );
};

export default Setting;
