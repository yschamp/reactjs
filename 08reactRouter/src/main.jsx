import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router'
import Layout from '../components/Layout.jsx'
import Home from '../components/Home.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import User from '../components/User.jsx'

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout/>,
//   children: [{
//     path:'',
//     element: <Home/>,
//   },
//   {
//       path:'about',
//       element: <About/>,
//   },
// {
//     path:'contact',
//     element: <Contact/>,
//   }]
// }])
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
