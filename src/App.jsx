import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Signup from './components/Signup/Login'
import Product from "./pages/Product/Product"
import Products from "./pages/Products/Products"
import Home from "./pages/Home/Home"
import Cart from "./Cart"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const Layout = ()=>{
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element:  <Products></Products>,
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ]
  },
  
]);
function App(){
  return <div>
  <RouterProvider router={router} />
  </div>
}

export default App