import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GlobalState from "./context/GlobalProvider";
import Button from "./components/button/button";
import Header from "./components/header/header";

function App() {
  const test = () => {
    console.log("click");
  };
  return (
    <GlobalState>
      <div className="App">
        <Header />
      </div>
    </GlobalState>
  );
}

export default App;
