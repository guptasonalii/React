import React from "react";
import ChildA from "./ChildA";

const PropDrilling = () => {
  const name = "sonali";
  return (
    <div>
      <h1>hello!! Props Driling</h1>
      <ChildA name={name} />
    </div>
  );
};

export default PropDrilling;
