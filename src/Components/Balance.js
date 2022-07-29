import React from "react";
import Logo from "../Images/logo.svg";

const Balance = () => {
  return (
    <div className="balance-container">
      <div className="balance">
        <p>My balance</p>
        <p>$921.48</p>
      </div>
      <img src={Logo} alt="Logo" />
    </div>
  );
};

export default Balance;
