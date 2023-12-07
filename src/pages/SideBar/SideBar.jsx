import React, { useEffect, useState } from 'react'
import { SlHome } from "react-icons/sl";
import { TbVirusSearch } from "react-icons/tb";
import { MdExplore } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { FcDoNotInhale } from "react-icons/fc";
import { BiSolidMessage } from "react-icons/bi";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import {  getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import Flex from '../../Components/Flex';
import { userLoginInfo } from '../../Components/Slices/UserSlice';
import { TypeAnimation } from 'react-type-animation';
import { RotatingLines } from 'react-loader-spinner';
import { FaRegHandPointDown } from 'react-icons/fa'
function SideBar({className}) {
    const data =useSelector(state => state.userLoginInfo.userInfo)
   
    const auth = getAuth();
    const navigate =useNavigate();
    const dispatch=useDispatch();
   const [verifyemail, setveryfyemail] =useState(false)
  const [loader, setloader] =useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified == false) {
     navigate('/emailverify')
    }
    dispatch(userLoginInfo(user))
    localStorage.setItem('userLoginInfo' , JSON.stringify(user))
    setloader(false)
  });

  
  useEffect(() => {
    if (!data) {
      navigate('/login-signup')
    }
  }, [])
  
   
  
 

  const handleLogOut = () =>{
    signOut(auth).then(() => {
      navigate('/login-signup')
      dispatch(userLoginInfo(null))
      localStorage.removeItem('userLoginInfo')

  
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
  

       
              
    
         
          <section className={`${className}`}>
            {
              loader
            }       
        </section>
  
  )
}

export default SideBar
