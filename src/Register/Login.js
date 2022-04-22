import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Buttons from "../Global/Button";

const Login = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="entrance-page">
      <div className="contain">
        <div className="entrance login">
          <div className="contents">
            <h1>Welcome Back!</h1>
            <p>Please enter your password to continue</p>
            <div className="form">
              <form>
                <div className="inputs">
                  <label className="name" for="create_pass">
                    Password
                  </label>
                  <input
                    type="password"
                    id="create_pass"
                    name="create_pass"
                    autocomplete="off"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    value={password}
                  />
                  <img className="show-pass" src="./assets/eye.svg" />
                </div>
                <Buttons name="Continue" />
                <span className="forget-pass"><a href="/">Forgot your password?</a></span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <img className="design" src="./assets/Design 1.svg" />
    </div>
  );
};

export default Login;
