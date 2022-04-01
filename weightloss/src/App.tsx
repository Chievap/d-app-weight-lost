import React from "react";
import "./App.css";
import GlobalState from "./context/GlobalProvider";
import Header from "./components/header/header";
import Card from "./components/card/card";
import Chart from "./components/chart/chart";
import ProgressCard from "./components/progressCard/progressCard";
import AddMealCard from "./components/addMealCard/addMealCard";

function App() {
  const test = () => {
    console.log("click");
  };
  return (
    <GlobalState>
      <div className="App">
        <Header />
        <div className="appBody">
          <ProgressCard />
          <AddMealCard />
        </div>
      </div>
    </GlobalState>
  );
}

export default App;
