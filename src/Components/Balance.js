import React from "react";
import Logo from "../Images/logo.svg";

const Balance = () => {
  return (
    <div className="balance-container">
      <div className="balance">
        <p>My balance</p>
        <h3>$921.48</h3>
      </div>
      <img src={Logo} alt="Logo" />
    </div>
  );
};

export default Balance;
