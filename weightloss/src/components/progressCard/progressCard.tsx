import React, { FC, useState } from "react";
import { Meal } from "../../models/meal";
import Card from "../card/card";

import "./progressCard.css";

const ProgressCard: FC = () => {
  const meals = [
    {
      name: "name 1",
      kcal: 5,
    },
    {
      name: "name 2",
      kcal: 5,
    },
  ];

  const renderMealComponent = () => {
    return (
      <div className="mealList">
        {meals.map((meal: Meal) => (
          <div className="mealItem">
            <p>{meal.name}</p>
            <p>{meal.kcal}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card title={"Progress"}>
      {/* <Chart /> */}
      <div>{renderMealComponent()}</div>
    </Card>
  );
};

export default ProgressCard;
