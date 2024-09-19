import { useState } from "react";
import { useCounter } from "../hooks";
import { useMemo } from "react";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("A");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { Counter, increment } = useCounter(4000);

  const [show, setShow] = useState(true);

  const messageMemorize = useMemo(() => heavyStuff(Counter), [Counter]);

  return (
    <>
      <h1>
        Counter: <small>{Counter}</small>
      </h1>
      <hr />

      <h4>{messageMemorize}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
