import React from 'react'
const name="Sonali Gupta";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();


const Jsx1 = () => {

  return (
    <div>
      <h1 style={{backgroundColor:'pink'}}>Hello!! My Name is {name}</h1>
      <p>Current Date is ={currDate}</p>
      <p>Current Time is ={currTime}</p>
    </div>
  )
}

export default Jsx1
