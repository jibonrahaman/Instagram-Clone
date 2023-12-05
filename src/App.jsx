import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import LoginReg from './pages/LoginReg';
import SideBar from './pages/SideBar/SideBar';
import HomePage from './pages/Home/HomePage'
import RootLeyaout from './pages/RootLeyaOut/RootLeyaout';

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/login-signup"
      element={<LoginReg />}>  
      </Route>

    <Route
      path="/"
      element={<RootLeyaout />}>  
      <Route  
      path="/"
      element={<HomePage/>} 
      >
      </Route>
      </Route> 


      {/* <Route
      path="/home"
      element={<HomeHome />}>  
      </Route>
       <Route
      path="/photos"
      element={<Photos />}>  
      </Route> */}
    {/* <Route
      path="/forgetpassword"
      element={<ForgetPassword />}>  
      </Route> */}
    
   </>
  )
);

const App = () => {
  return (
    <>
  
    <RouterProvider router={router} />
    </>
  )
}

export default App