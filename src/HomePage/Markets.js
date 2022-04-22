import React, { useState } from "react";
import Buttons from "../Global/Button";

const Markets = () => {
  const [state, setState] = useState({
    table: [
      {
        pair: "Yona / btc",
        last_price: "0.00021346 / 2.45$",
        change: "-1.84%",
        high: "0.00021983",
        low: "0.00019863",
        volume: "0.000",
        chart: "./assets/chartdesign.svg",
      },
      {
        pair: "Yona / btc",
        last_price: "0.00021346 / 2.45$",
        change: "-1.84%",
        high: "0.00021983",
        low: "0.00019863",
        volume: "0.000",
        chart: "./assets/chartdesign.svg",
      },
      {
        pair: "Yona / btc",
        last_price: "0.00021346 / 2.45$",
        change: "-1.84%",
        high: "0.00021983",
        low: "0.00019863",
        volume: "0.000",
        chart: "./assets/chartdesign.svg",
      },
      {
        pair: "Yona / btc",
        last_price: "0.00021346 / 2.45$",
        change: "-1.84%",
        high: "0.00021983",
        low: "0.00019863",
        volume: "0.000",
        chart: "./assets/chartdesign.svg",
      },
      {
        pair: "Yona / btc",
        last_price: "0.00021346 / 2.45$",
        change: "-1.84%",
        high: "0.00021983",
        low: "0.00019863",
        volume: "0.000",
        chart: "./assets/chartdesign.svg",
      },
      {
        pair: "Yona / btc",
        last_price: "0.00021346 / 2.45$",
        change: "-1.84%",
        high: "0.00021983",
        low: "0.00019863",
        volume: "0.000",
        chart: "./assets/chartdesign.svg",
      },
      {
        pair: "Yona / btc",
        last_price: "0.00021346 / 2.45$",
        change: "-1.84%",
        high: "0.00021983",
        low: "0.00019863",
        volume: "0.000",
        chart: "./assets/chartdesign.svg",
      }
    ],
  });

  return (
    <div className="markets">
      <div className="title">
        <h3>Markets</h3>
        <img className="lines" src="./assets/Lines1.svg" />
      </div>
      <p>
        Yona Exchange allows you to execute trades swiftly and securely,
        regardless of whether you’re trading via mobile app, desktop client, web
        wallet or the Waves API
      </p>
      <div className="chart">
        <table className="table">
          <thead className="heading">
            <tr>
              <th>PAIR</th>
              <th>LAST PRICE</th>
              <th>CHANGE</th>
              <th>24 HIGH</th>
              <th>24 LOW</th>
              <th>VOLUME</th>
              <th>CHART</th>
            </tr>
          </thead>
          <tbody className="main">
            {state.table.map((item) => (
              <tr>
                <td>{item.pair}</td>
                <td>{item.last_price}</td>
                <td>{item.change}</td>
                <td>{item.high}</td>
                <td>{item.low}</td>
                <td>{item.volume}</td>
                <td>
                  <img src={item.chart} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="more-detail">
        <span className="trading-span">To view more traded pairs click <button>Trading</button></span>
        <a href="/login"><Buttons name="Log in" /></a>
      </div>
    </div>
  );
};

export default Markets;
