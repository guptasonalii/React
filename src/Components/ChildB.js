import React from 'react'
import ChildC from './ChildC'

const ChildB = (props) => {
  return (
    <div>
      <ChildC name={props.name}/>
    </div>
  )
}

export default ChildB
