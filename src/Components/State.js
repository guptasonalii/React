import React, { useState } from 'react'

const State = () => {
    const[login,setLogin]=useState(true)
    // const[value,setValue]=useState(2)
  return (
    <div>
        {login?<h1>Conditional Rendering!!</h1>:<h1>Welcome Rendering</h1>}
      
{/* {value==1 ?<h1>SONLI GUPTA</h1>: value==2 ?<h1>KIRAN</h1>} */}
    </div>
  )
}

export default State

