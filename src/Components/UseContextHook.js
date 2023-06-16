import React, { createContext } from 'react';
import CompA from './CompA';

const data=createContext();
const data1=createContext();

const UseContextHook = () => {
    const name="sonali"
    const profession="Frontend Developer"

  return (
    <div>
        <data.Provider value={name}>
            <data1.Provider value={profession}>
            <CompA/>
            </data1.Provider>
           
        </data.Provider>
      
    </div>
  )
}

export default UseContextHook
export {data, data1}