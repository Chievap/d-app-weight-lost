import React, { FC, useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalProvider";
import { Meal } from "../../models/meal";
import Card from "../card/card";

import "./progressCard.css";

const ProgressCard: FC = () => {
  const { getMeals, meals } = useContext(GlobalContext);
  const [mls, setMeals] = useState<Meal[]>();

  useEffect(() => {
    setMeals(meals);
    console.log(meals);
    
  }, [meals]);

  const renderMealComponent = () => {
    if (!mls || mls.length === 0) {
      return (
        <div className="mealList">
          <p>No meals added yet</p>
        </div>
      );
    }

    return (
      <div className="mealList">
        {mls.map((meal: Meal) => (
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
