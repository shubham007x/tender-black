import React, { useEffect, useState } from "react";
import CounterView from "./components/view/CounterView";
import { CounterModel } from "./components/model/CounterModel";
import { CounterIntent } from "./components/intent/CounterIntent";

const App = () => {
  const [count, setCount] = useState(0);
  const [autoIncrement, setAutoIncrement] = useState(false);

  useEffect(() => {
    const subscription = CounterModel.Update$.subscribe(setCount);
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {

    const autoSub = CounterModel.autoInc$.subscribe(setAutoIncrement);
    return () => autoSub.unsubscribe();
  }, []);

  return (
    <CounterView
      count={count}
      onIncrement={CounterIntent.increment}
      onDecrement={CounterIntent.decrement}
      onReset={CounterIntent.reset}
      onToggleAuto={CounterIntent.toggleAutoIncrement}
      autoIncrement={autoIncrement}
    />
  );
};

export default App;
