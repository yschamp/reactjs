import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {

  const myArr = [1,2,3]
  const myObj = {name: "yuvraj"}

  return (
    <>
    <h1 className='text-black bg-green-500 p-5 rounded-xl mb-4'>Tailwind css</h1>
    <Card productName="Plates" desc="This is a really good product" myArr={myArr} myObj={myObj} btnText="Buy"/>
    <Card productName="Mobile" desc="It has a great camera" myArr={myArr} myObj={myObj} btnText="Add to cart"/>
    </>
  )
}

export default App
