import React, { createContext, useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    isActive: false,
  });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
