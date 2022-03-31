import React, { createContext, useState, FC } from "react";
import { ContextState } from "./Types";

const contextDefaultValues: ContextState = {};

export const GlobalContext = createContext<ContextState>(contextDefaultValues);

const GlobalState: FC = ({ children }) => {
  const test = () => {};

  return (
    <GlobalContext.Provider value={{ test }}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
