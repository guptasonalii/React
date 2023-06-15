import React from 'react'
import ChildB from './ChildB'
const ChildA = (props) => {
  return (
    <div>
      <ChildB name={props.name}/>
    </div>
  )
}

export default ChildA
