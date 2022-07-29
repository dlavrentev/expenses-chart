import React from "react";
import data from './../Data/data.json'

const Spending = () => {



  return (
    <div className="spending-container">
      <h1>Spending - Last 7 days</h1>
      <div className="details-container">
      {data.map(({amount}) => {
          return (
            <div>${amount}</div>
          );
        })}
      </div>
      <div className="chart-container">
        {data.map(({id, day}) => {
          return (
            <div key={id} className="bar">
              <div></div>
              <p>{day}</p>
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

console.log(data.amount);

export default Spending;
