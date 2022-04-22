import React, { useState } from "react";
import Buttons from "../Global/Button";
import Popup from "../Popups/Popup"

const RecieveBitcoins = () => {
  const [state, setState] = useState({
    recievePopup: false,
  });
  const popupStatusHandler = () => {
    setState({
      ...state,
      recievePopup: !state.recievePopup,
    });
  };

  return (
    <React.Fragment>
      <Popup
        active={state.recievePopup}
        class="recieve-bitcoin"
        title="Recieve Bitcoins"
        popupStatus={popupStatusHandler}
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
  );
};

export default RecieveBitcoins;
