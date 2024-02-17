import React from 'react'
import { useSelector } from 'react-redux'

function MyComponent() {
  const count = useSelector((state)=>state.counter)
  return (
    <div>MyComponent : {count}</div>
  )
}

export default MyComponent