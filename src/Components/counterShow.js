import React from 'react'
import { useSelector } from 'react-redux'

function CounterShow() {
    const count = useSelector((state) => state.counter.value)
  return (
    <h1 style={{color:"white"}}>Cavab : {count}</h1>
  )
}

export default CounterShow