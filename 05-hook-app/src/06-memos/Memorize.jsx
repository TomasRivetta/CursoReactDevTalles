import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";
export const Memorize = () => {
  const { Counter, increment } = useCounter(1);

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={Counter} />
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
