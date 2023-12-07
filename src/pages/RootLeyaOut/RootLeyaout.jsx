import React, { useEffect, useState } from 'react'
import Flex from '../../Components/Flex'
import SideBar from '../SideBar/SideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import email from '../../assets/email.jpg'
import { FaRegHandPointDown } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { useDispatch, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { userLoginInfo } from '../../Components/Slices/UserSlice';
import UserList from '../Users/UserList';
import HomePage from '../Home/HomePage';
function RootLeyaout() {

  const data = useSelector(state => state.userLoginInfo.userInfo)

  return (

    <section   >

      <Flex className=" justify-between" >
        <SideBar className=" fixed w-[20%]" />
       <Outlet/>
      </Flex>




    </section>
  )
}

export default RootLeyaout
