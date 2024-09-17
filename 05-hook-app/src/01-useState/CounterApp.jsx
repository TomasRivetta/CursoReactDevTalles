import { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    Counter1: 10,
    Counter2: 20,
    Counter3: 30,
  });

  const { Counter1, Counter2, Counter3 } = state;

  return (
    <>
      <h1>Counter: {Counter1}</h1>
      <h1>Counter: {Counter2}</h1>
      <h1>Counter: {Counter3}</h1>

      <hr />

      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...state,
            Counter1: Counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
