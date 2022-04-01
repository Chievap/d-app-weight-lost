import React, { createContext, useState, FC } from "react";
import { Meal } from "../models/meal";
import { ContextState } from "./Types";

const contextDefaultValues: ContextState = { addMeal: (meal: Meal) => {}, getMeals: () => [], meals: [] };

export const GlobalContext = createContext<ContextState>(contextDefaultValues);

const GlobalState: FC = ({ children }) => {
  const [meals, setMeals] = useState<Meal[]>([]);

  const addMeal = (meal: Meal) => {
    setMeals([...meals, meal]);
  };

  const getMeals = () => {
    return meals;
  };

  return (
    <GlobalContext.Provider value={{ addMeal, getMeals, meals }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
