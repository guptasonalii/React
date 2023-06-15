import React from 'react'
import Button from '@mui/material/Button'

const CommonProp = (prop) => {
  return (
    <div>
      <h1>{prop.name}</h1>
      <p>{prop.position}</p>
      <Button variant="outlined" spacing={4}>Send</Button>
    </div>
  )
}

export default CommonProp
