import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [ counter, setCounter ] = useState(5)

  function increaseValue(){
    // counter = counter + 1
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
  }

  function decreaseValue(){
    counter = counter - 1
    setCounter(counter)
  }

  return (
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={increaseValue}>Increase {counter}</button>
    <br /> <br/>
    <button onClick={decreaseValue}>Decrease {counter}</button>
    </>
  )
}

export default App
