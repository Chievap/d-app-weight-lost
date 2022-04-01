import React, { FC, useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalProvider";
import { Meal } from "../../models/meal";
import Button from "../button/button";
import Card from "../card/card";

import "./addMealCard.css";

const AddMealCard: FC = () => {
  const { addMeal, getMeals } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [kcal, setKcal] = useState(0);

  const add = () => {
    const meal: Meal = { name: name, kcal: kcal };
    addMeal(meal);
  };

  const changeName = (str: string) => {
    setName(str);
  };

  const changeKcal = (str: string) => {
    setKcal(Number.parseInt(str));
  };

  return (
    <Card title={"Add meal"}>
      <p className="addMealInputTitle">Name: </p>
      <input
        className="addMealInput"
        type="text"
        value={name}
        onChange={(e) => changeName(e.target.value)}
      />
      <p className="addMealInputTitle">Kcal: </p>
      <input
        className="addMealInput"
        type="number"
        value={kcal}
        onChange={(e) => changeKcal(e.target.value)}
      />
      <Button text={"Submit"} onClick={() => add()} />
    </Card>
  );
};

export default AddMealCard;
