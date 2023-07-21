import React, { useReducer, useState } from "react";
import Child from "./Child";
const reducer = () => {};

const Parent = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleCount}>Click</button>
      <Child count={count} />
    </div>
  );
};

export default Parent;
