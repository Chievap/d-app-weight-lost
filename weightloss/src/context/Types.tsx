import { Meal } from "../models/meal";

export type ContextState = {
  addMeal: (meal: Meal) => void;
  getMeals: () => Meal[];
};
