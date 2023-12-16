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
import Verifyemail from './Components/Verifyemail';
import TodoAbout from './pages/TodoAbout/TodoAbout';
import People from './pages/People/People';
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLeyaout />,
    
    children: [
      {
        path: "/",
        element: <HomePage />,
      },{
        path: "/profile",
        element: <TodoAbout />,
      },{
        path: "/people",
        element: <People />,
      },
    ],
  },
  {
    path:"/login-signup",
    element:<LoginReg/>
  }, 
 
]);

const App = () => {
  return (
    <>
    <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    <RouterProvider router={router} />
    </>
  )
}

export default App