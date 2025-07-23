import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Yuvraj</h1>
  )
}

const reactElements = {
    name: 'a',
    props: {
        target: '_blank',
        href: 'https://google.com'
    },
    children: 'Click me'
}

const reactElement = React.createElement(
  'a',
  {target: '_blank', href: 'https://amazon.com'},
  'Amazon ',
  'GOING'
)

createRoot(document.getElementById('root')).render(
    // <App /> 
    // <MyApp/>
    reactElement
)


// createRoot function expects a function which is evaluated to create a reactElement
// we can create the function there itself
// we can also create an element and pass it in render function