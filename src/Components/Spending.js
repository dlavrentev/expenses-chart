import React, { useState } from "react";
import data from "./../Data/data.json";

const Spending = () => {

  const [isHovering, setisHovering] = useState(false);

  const handleMouseEnter = (e) => {
    setisHovering(false);
    console.log(e._targetInst.alternate.key)
  };

  const handleMouseLeave = () => {
    setisHovering(true);
  };

  return (
    <div className="spending-container">
      <h1>Spending - Last 7 days</h1>
      <div className="chart-container">
        {data.map(({ id, day, amount }) => {
          return (
            <div className="bar" key={id}>
              <div
                
                className={`detail`}
                id={`${isHovering ? `hidden${id}` : `visible${id}`}`}
              >
                ${amount}
              </div>
              <div
                key={id}
                className={`bars bar-${id}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  height: `${(data[id - 1].amount / 52.36) * 150}px`,
                }}
              ></div>
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

export default Spending;
