import React from 'react'
import Button from '@mui/material/Button'

const Events = () => {
  return (
    <div>
      <h1>React</h1>
      <Button  color="success"
      variant='outlined'
      size="medium"
      onClick={()=>{
    alert("Clicked Me")}}>
        CLICK ME
        </Button>
    </div>
  )
}

export default Events

