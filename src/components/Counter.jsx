import React, { useEffect, useRef, useContext } from "react";
import { CounterContext } from "../context/counterContext";
import { ACTIONS } from "../constants/actionTypes";
import styles from "./Counter.module.css";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  const { isActive, count } = state;
  const TimerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      TimerRef.current = setInterval(() => {
        dispatch({ type: ACTIONS.INCREMENT });
      }, 1100);
    } else {
      clearInterval(TimerRef.current);
    }

    return () => clearInterval(TimerRef.current);
  }, [isActive, dispatch]);

  return (
    <div className={styles.counterContainer}>
      <h1 className={styles.counterTitle}>Counter: {count}</h1>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${styles.decrement}`}
          disabled={count === 0}
          onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
        >
          -
        </button>
        <button
          className={`${styles.button} ${styles.reset}`}
          onClick={() => dispatch({ type: ACTIONS.RESET })}
        >
          Reset
        </button>
        <button
          className={`${styles.button} ${styles.increment}`}
          disabled={count === 98}
          onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
        >
          +
        </button>
        <button
          className={`${styles.button} ${styles.autoButton}`}
          onClick={() => dispatch({ type: ACTIONS.TOGGLE_AUTO })}
        >
          {isActive ? "Disable Auto" : "Start Auto"}
        </button>
      </div>
    </div>
  );
};

export default Counter;
