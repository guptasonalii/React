import React from 'react'
import {useState, useEffect } from 'react'
import {Button, Stack} from '@mui/material'


const UseEffect = () => {
    const[num,setNum]=useState(0)
    const[nums,setNums]=useState(0)
    useEffect(()=>{
        alert("hello!!!Clicked")
    },[num]);

  return (
    <Stack spacing={2} direction="row" >
      <h1 className="text-center mt-2">UseEffect</h1>
      <Button variant="contained" color='primary' onClick={()=>{
        setNum(num+1);
      }}>Click ME{num}</Button>
      <Button variant="contained" color="success" onClick={()=>{setNums(nums+1);}}>Click ME{nums}</Button>
    </Stack>
  )
}

export default UseEffect
