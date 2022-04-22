import React, { useState } from "react";

const Information = () => {
  return (
    <div className="information">
      <div className="contents">
        <div className="image">
          <img src="./assets/lock.svg" />
        </div>
        <h4>Security due to decentralization</h4>
        <p>
          Control of assets is yours alone – funds do not leave your wallet and
          cannot be frozen
        </p>
      </div>
      <div className="contents">
        <div className="image">
          <img src="./assets/ruler.svg" />
        </div>
        <h4>Ledger support</h4>
        <p>
          Use Yona Exchange with hardware wallets Ledger Nano S and Ledger Blue
        </p>
      </div>
      <div className="contents">
        <div className="image">
          <img src="./assets/template.svg" />
        </div>
        <h4>API</h4>
        <p>Integrate your own trading software into Yona Exchange</p>
      </div>
    </div>
  );
};
export default Information;
