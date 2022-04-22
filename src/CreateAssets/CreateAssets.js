import React, { useState } from "react";
import Buttons from "../Global/Button";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import Switch from "@mui/material/Switch";

const CreateAssets = () => {
  const [state, setState] = useState({
    toggle: false,
  });
  const handleSwitch = () => {
    setState({ ...state, toggle: true });
  };
  return (
    <div className="create-asset">
      <div className="contain">
        <div className="page-content">
          <div className="btn-wrapper">
            <a href="/portfolio">
              <Buttons name="Portfolio" svg="./assets/bag-white.svg" />
            </a>
            <a href="/transaction">
              <Buttons name="Transactions" svg="./assets/arrow-white.svg" />
            </a>
            <a className="active" href="/create-asset">
              <Buttons name="Creat Asset" svg="./assets/plus.svg" />
            </a>
          </div>
          <div className="contents">
            <div className="heading">
              <span>Asset generation</span>
            </div>
            <div className="items">
              <strong>Name of your asset</strong>
              <p>Please use only Latin letters</p>
              <input type="text" />
            </div>
            <div className="items">
              <strong>Description</strong>
              <p>You can`t change it later</p>
              <textarea></textarea>
            </div>
            <div className="items amount">
              <strong>Total Asset?</strong>
              <p>
                This field defines the total assets supply that your asset will
                contain.
              </p>
              <input className="price" src="type" placeholder="Enter Amount" />
              <input
                className="selectBar"
                src="select"
                placeholder="Reissuable"
              />
            </div>
            <div className="items">
              <strong>Decimals?</strong>
              <p>
                This field defines the number of decimals that your asset will
                be divided in.
              </p>
              <Slider
                aria-label="Always visible"
                defaultValue={0}
                max={7}
                // getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="on"
              />
              <div className="range">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
              </div>
            </div>
            <div className="items">
              <strong>Smart asset?</strong>
              <p>
                A Smart Asset is an asset with an attached script that places
                conditions.
              </p>
              <div className={`switch-btn ${state.toggle ? "active" : ""}`}>
                <label>
                  <input type="checkbox" onClick={handleSwitch} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="items">
              <strong>Preview</strong>
              <div className="userFace">
                <div className="pic"></div>
                <div className="title">
                  <h6></h6>
                  <span></span>
                </div>
              </div>
              <div className="content">
                <p>
                  You agree that: I) You will not use the asset for fraudulent
                  purposes; II) You will not duplicate, fully or in part, the
                  name of an existing cryptocurrency or a well-known company
                  with the aim of misleading users; III) You will not use names
                  of states, other administrative units or municipal
                  institutions for the asset's name with the aim of misleading
                  users; IV) You will not set a script on a smart asset that
                  limits exchange transactions on Waves.Exchange by asset
                  quantity; V) You will not give false information in a smart
                  asset's description concerning the rules governing the asset's
                  use, which do not correspond to those of the script installed
                  on it;
                </p>
              </div>
              <FormControlLabel
                className="checked"
                control={<Checkbox defaultChecked />}
                label={
                  <p>
                    I understand that in the case of non-compliance with the
                    rules, my asset will be categorised as 'Suspicious', and
                    will be available for search only by ID.
                  </p>
                }
              />
              <span className="waves">
                Transaction Fee <b>1 Yona ?</b>
              </span>
            </div>
            <Buttons name="Generate" />
          </div>
        </div>
      </div>
      <img className="design" src="./assets/Desgin5.svg" />
    </div>
  );
};

export default CreateAssets;
