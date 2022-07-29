import React from "react";

const Spending = () => {
  return (
    <div className="spending-container">
      <h1>Spending - Last 7 days</h1>
      <div className="chart-container">
        <div className="bar">
          <div></div>
          <p>mon</p>
        </div>
        <div className="bar">
          <div></div>
          <p>tue</p>
        </div>
        <div className="bar">
          <div></div>
          <p>wed</p>
        </div>
        <div className="bar">
          <div></div>
          <p>thu</p>
        </div>
        <div className="bar">
          <div></div>
          <p>fri</p>
        </div>
        <div className="bar">
          <div></div>
          <p>sat</p>
        </div>
        <div className="bar">
          <div></div>
          <p>sun</p>
        </div>
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
