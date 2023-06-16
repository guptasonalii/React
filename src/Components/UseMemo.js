import React, { useState } from "react";
import { Button } from "@mui/material";

const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);
  const Multiplication = UseMemo(
    function mulitiply() {
      console.log("sonali");
      return add * 10;
    },
    [add]
  );
  return (
    <div>
      <h1 className="bg-dark text-primary text-center mt-4">
        Learning UseMemoHook!!
      </h1>
      {Multiplication}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        Addition :{add}
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setSub(sub - 1);
        }}
      >
        Subtraction : {sub}
      </Button>
    </div>
  );
};

export default UseMemo;
