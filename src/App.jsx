import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
 
  createBrowserRouter,

  RouterProvider
} from "react-router-dom";

import * as ReactDOM from "react-dom/client";
import RootLeyaout from    './pages/RootLeyaOut/RootLeyaout'
import HomePage from './pages/Home/HomePage';
import LoginReg from './../src/pages/LoginReg'
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLeyaout />,
    
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
  {
    path:"/login-signup",
    element:<LoginReg/>
  }
]);

const App = () => {
  return (
    <>
  
    <RouterProvider router={router} />
    </>
  )
}

export default App