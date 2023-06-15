import React, { useState } from "react";

const Hooks1 = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(10);

  const Increment = () => {
    setValue(value + 1);
  };
  const Decrement = () => {
    if(count<=0){
        setCount(0) ;
    }else{
        setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="text-white bg-dark" onClick={Increment}>
        Increment
      </button>
      <h1>{count}</h1>
      <button className="text-white bg-dark" onClick={Decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Hooks1;
