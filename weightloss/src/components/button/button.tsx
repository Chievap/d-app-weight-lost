import React, { FC } from "react";
import "./button.css";

type Props = {
  onClick: Function;
  text: String;
};

const Button: FC<Props> = ({ onClick, text }) => {
  return (
    <div className={"buttonContainer"} onClick={() => onClick()}>
      <p className={"buttonText"}>{text}</p>
    </div>
  );
};

export default Button;
