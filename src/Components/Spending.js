import React, { useState } from "react";
import data from "./../Data/data.json";

const Spending = () => {
  const [isHovering, setisHovering] = useState(false);

  const handleMouseEnter = (e) => {
    console.log(e.target);
    setisHovering(false);
  };

  const handleMouseLeave = () => {
    setisHovering(true);
  };

  return (
    <div className="spending-container">
      <h1>Spending - Last 7 days</h1>
      <div className="chart-container">
            <div className="bar" key={data.id}>
              <div
                className={`detail`}
                id={`${isHovering ? `hidden${data.id}` : `visible${id}`}`}
              >
                ${data.amount}
              </div>
              <div
                key={data.id}
                className={`bars bar-${data.id}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  height: `${(data[id - 1].amount / 52.36) * 150}px`,
                }}
              ></div>
              <p>{data.day}</p>
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
