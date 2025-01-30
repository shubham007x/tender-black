import "./CounterView.css";

const CounterView = ({ count, onIncrement, onDecrement, onReset, onToggleAuto, autoIncrement }) => {
  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter: {count}</h1>
      <div className="button-group">
        <button onClick={onIncrement} className="counter-button increment">
          +
        </button>
        <button onClick={onDecrement} className="counter-button decrement">
          -
        </button>
        <button onClick={onReset} className="counter-button reset">
          Reset
        </button>
      </div>
      <button
        onClick={onToggleAuto}
        className={`auto-button ${autoIncrement ? "active" : ""}`}
      >
        {autoIncrement ? "Stop Auto" : "Start Auto"}
      </button>
    </div>
  );
};

export default CounterView;
