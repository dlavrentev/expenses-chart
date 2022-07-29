import React from "react";
import data from "./../Data/data.js";

const Spending = () => {
  return (
    <div className="spending-container">
      <h1>Spending - Last 7 days</h1>
      <div className="details-container">
        <div>$31.07</div>
        <div>$31.07</div>
        <div>$31.07</div>
        <div>$31.07</div>
        <div>$31.07</div>
        <div>$31.07</div>
        <div>$31.07</div>
      </div>
      <div className="chart-container">
        {data.map((data) => {
          return (
            <div className="bar">
              <div>&{data[0].amount}</div>
              <p>mon</p>
            </div>
          );
        })}
      </div>
      <div className="line"></div>
      <div className="spending-bottom">
        <div className="spending-bottom-l">
          <h2>Total this month</h2>
          <h1>$478.33</h1>
        </div>
        <div className="spending-bottom-r">
          <p>+2.4%</p>
          <h2>from last month</h2>
        </div>
      </div>
    </div>
  );
};

export default Spending;
