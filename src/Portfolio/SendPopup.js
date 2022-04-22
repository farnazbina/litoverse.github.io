import React, { useState } from "react";
import Buttons from "../Global/Button";
import Popup from "../Popups/Popup";
import Button from "@mui/material/Button";

const SendBitcoins = () => {
  const [state, setState] = useState({
    sendPopup: false,
  });
  const popupStatusHandler = () => {
    setState({
      ...state,
      sendPopup: !state.sendPopup,
    });
  };

  return (
    <React.Fragment>
      <Popup
        active={state.sendPopup}
        class="send-bitcoin"
        title="Send Bitcoins"
        popupStatus={popupStatusHandler}
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
            <Button className="cancel" variant="text">
              Cancel
            </Button>
            <Button className="continue" variant="text">
              Continue
            </Button>
          </div>
        </div>
      </Popup>
    </React.Fragment>
  );
};

export default SendBitcoins;
