import React from 'react'
import {useState,useEffect} from 'react'
import {Button, Stack} from '@mui/material'

const UseEffect1 = () => {
    const [value,setValue]=useState(0)
    const[data,setData]=useState("sonali")
    useEffect(()=>{
        alert("component mount")
    },[])
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" color="success" onClick={()=>{
        setValue(value+1); 
      }}>Click ME!!</Button>
      <Button variant="contained" color="success" onClick={()=>{
        setValue("sonali");}} >Update Data</Button>
    </Stack>
  )
}

export default UseEffect1
