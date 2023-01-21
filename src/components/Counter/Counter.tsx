import "./counter.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function restart() {
    setCount(0);
  }

  function switchSigns() {
    setCount(count * -1);
  }

  return (
    <div className="container">
      <div className="count">Count: {count}</div>
      <div className="counter-btns">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Switch Signs</button>
      </div>
    </div>
  );
};

export default Counter;
