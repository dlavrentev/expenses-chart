import React from "react";
import "./App.css";
import Spending from "./Components/Spending";
import Balance from "./Components/Balance";

function App() {
  return (
    <div className="App">
      <Balance />
      <Spending />
    </div>
  );
}

export default App;
