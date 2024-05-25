import React from 'react'
import {
    Outlet,
    Link,
    createBrowserRouter,
    RouterProvider,
    useNavigation,
  } from "react-router-dom";

    //components
    import Navbar from '../../navbar/Navbar';

export default function HomeLayout() {
  return (
    <div className='py-8 px-3'>
      <Navbar/>   
      <Outlet />

    </div>
  )
}
