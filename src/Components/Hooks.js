import React from "react";
import { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(10);
  const IncNum = () => {
    setCount(count + 5);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={IncNum}>CLICK ME</button>
    </div>
  );
};

export default Hooks;
