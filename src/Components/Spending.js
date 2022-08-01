import React from "react";
// import data from "./../Data/data.json";

const Spending = () => {
  // const [isHovering, setisHovering] = useState(false);

  // const handleMouseEnter = () => {
  //   setisHovering(false);
  // };

  // const handleMouseLeave = () => {
  //   setisHovering(true);
  // };

  return (
    <div className="spending-container">
      <h1>Spending - Last 7 days</h1>
      <div className="chart-container">
        
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
