import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { decrement, increment, reset } from "./redux/slice/counterSlice"

export default function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <div>
      <button onClick={()=>dispatch(increment())} className="bg-green-500 border p-1 text-white rounded cursor-pointer shadow-lg m-1">Increment</button>
      <button onClick={()=>dispatch(reset())} className="bg-gray-500 border p-1 text-white shadow-lg cursor-pointer rounded m-1">Reset</button>
      <button onClick={()=>dispatch(decrement())} className="bg-red-500 border p-1 text-white shadow-lg cursor-pointer rounded m-1">Decrement</button>

      <h1>Count:{count}</h1>
    </div>
    </>
  )
}