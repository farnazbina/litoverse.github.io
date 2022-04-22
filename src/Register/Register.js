import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Buttons from "../Global/Button";

const Register = () => {
  const [password, setPassword] = useState("");
  return (
    <div className="entrance-page">
      <div className="contain">
        <div className="entrance">
          <div className="contents">
            <h1>Protect Your Accounts</h1>
            <p>Set a single password for all your accounts</p>
            <div className="form">
              <form autocomplete="false">
              <div className="inputs">
                  <label className="name" for="create_pass">
                  Create password
                  </label>
                  <input
                    type="password"
                    id="create_pass"
                    name="create_pass"
                    autocomplete="off"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    value={'Create password'}
                  />
                  <img className="show-pass" src="./assets/eye.svg" />
                </div>
                <div className="inputs">
                  <label className="name" for="create_pass">
                  Confirm Password
                  </label>
                  <input
                    type="password"
                    id="create_pass"
                    name="create_pass"
                    autocomplete="off"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    value={'Confirm Password'}
                  />
                  <img className="show-pass" src="./assets/eye.svg" />
                </div>
                <div className="checks">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                      <span>
                        I have read and agree with the
                        <a href="/">Privacy Policy</a>
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                      <span>
                        I have read and agree with the
                        <a href="/">Terms and Conditions</a>
                      </span>
                    }
                  />
                </div>
                <Buttons name="Continue" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <img src="./assets/Design 1.svg" />
    </div>
  );
};

export default Register;
