import React, { createContext } from 'react'
import ComA from './ComA'
const FirstName=createContext();
const LastName=createContext();


const ContextApi = () => {
  return (
    <div>
        <FirstName.Provider value={"sonali "} >
            <LastName.Provider value={"Gupta"}>
        <ComA/>
        </LastName.Provider>
        </FirstName.Provider>
     
    </div>
  )
}

export default ContextApi;
export {FirstName,LastName}
