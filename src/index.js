import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Responsive.css";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/swiper.scss";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./Global/Menu";
import HomePage from "./HomePage/HomePage";
import Wallet from "./Wallet/Wallet";
import Register from "./Register/Register";
import Login from "./Register/Login";
import CreateAssets from "./CreateAssets/CreateAssets";
import Investments from "./Investments/Investment";
import Stacking from "./Investments/Stacking";
import LandingStacking from "./Investments/Landing/Stacking Landing";
import Stacking1 from "./Investments/Stacking1";
import Stacking2 from "./Investments/Stacking2";
import Portfolio from "./Portfolio/Portfolio";
import Transaction from "./Transaction/Transaction";
import Neutrino from "./Investments/Neutrino";



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/wallet" component={Wallet}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/create-asset" component={CreateAssets}></Route>
        <Route exact path="/investments" component={Investments}></Route>
        <Route exact path="/stacking" component={Stacking}></Route>
        <Route exact path="/stacking1" component={Stacking1}></Route>
        <Route exact path="/stacking2" component={Stacking2}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route exact path="/transaction" component={Transaction}></Route>
        <Route exact path="/neutrino" component={Neutrino}></Route>
        <Route
          exact
          path="/stacking-landing"
          component={LandingStacking}
        ></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
