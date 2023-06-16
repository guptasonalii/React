import React, { useContext } from "react";
import {data, data1} from './UseContextHook'


const CompC = () => {
    const name = useContext(data);
const gender = useContext(data1);
  return (
    <div>
      <h1>
        My Name is {name} and my profession is{gender}
      </h1>
    </div>
  );
};

export default CompC;
