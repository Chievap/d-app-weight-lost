import React, { FC } from "react";
import "./card.css";
type Props = {
  title?: String;
};

const Card: FC<Props> = ({ children, title }) => {
  return (
    <div className="cardContainer">
      {title ? <p className="cardTitle">{title}</p> : null}
      {children}
    </div>
  );
};

export default Card;
