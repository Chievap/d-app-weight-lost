import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GlobalState from "./context/GlobalProvider";
import Button from "./components/button/button";
import Header from "./components/header/header";
import Card from "./components/card/card";

function App() {
  const test = () => {
    console.log("click");
  };
  return (
    <GlobalState>
      <div className="App">
        <Header />
        <div className="appBody">
        <Card title={"Foods"}><p>test</p></Card>
        <Card title={"Progress"}><p>test</p></Card>
        <Card title={"Lasts eaten"}><p>test</p></Card>
        </div>
      </div>
    </GlobalState>
  );
}

export default App;
