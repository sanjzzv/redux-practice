import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/slices/counter"
import MyComponent from "./components/MyComponent"

function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <>
     <h1>Count is {count}</h1>
     <button onClick={()=>dispatch(increment())}>increment</button>
     <button onClick={()=>dispatch(decrement())}>decrement</button>
     <MyComponent/>
    </>
  )
}

export default App
