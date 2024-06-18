import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './components/Authentication/Login'
import Register from './components/Authentication/Register'
import Product from "./pages/Product/Product"
import Products from "./pages/Products/Products"
import Cart from "./Cart"
import CarouselSlider from "./pages/Home/HeroSection"
import "./pages/Home/slider.css"
import SuccessButton from './components/Button/Success'

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
        element: <CarouselSlider></CarouselSlider>
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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/button",
        element: <SuccessButton></SuccessButton>,
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