import React, { FC } from "react";
import Button from "../button/button";
import "./header.css";

const Header: FC = ({}) => {
  const join = () => {
    console.log("join");
  };
  return (
    <div className="headerContainer">
      <p className="headerText">Weight loss</p>
      <div className="headerButton">
        <Button text={"Join"} onClick={() => join()} />
      </div>
    </div>
  );
};

export default Header;
