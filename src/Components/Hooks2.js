import React, { useState } from "react";
import { Button, Stack } from "@mui/material";

const Hooks2 = () => {
  const [age, setAge] = useState(10);

  const AgeFun=()=>{
    setAge(age=>age+1);
  }

  const handleclick = () => {
    setAge(age + 3);
  };
  const handleClick6 = () => {
    setAge(age + 6);
  };

  return (
    <Stack spacing={4} direction="row">
      <h1>your age :{age}</h1>
      <Button variant="outlined" color="primary" onClick={AgeFun}>
        +1
      </Button>
      <Button
        variant="filled"
        color="primary"
        onClick={()=>{
          AgeFun();
          AgeFun();
          AgeFun();
        }}
      >
        +3
      </Button>
      <Button variant="contained" color="success" onClick={handleClick6}>
        +6
      </Button>
    </Stack>
  );
};

export default Hooks2;
