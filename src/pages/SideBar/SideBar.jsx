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
import { IoSend } from "react-icons/io5";

function SideBar({className}) {
    const data =useSelector(state => state.userLoginInfo.userInfo)
   
    const auth = getAuth();
    const navigate =useNavigate();
    const dispatch=useDispatch();
     const [verifyemail, setveryfyemail] =useState(false)
  const [loader, setloader] =useState(false);

  useEffect(()=>{
    if(data == null){
       navigate("/login-signup")
    } 
   },[])
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
    <section  >

       
              
    
         
          <section className={`${className}`}>
    
  <section   >


       


    <div className=' pl-7  w-full  h-screen pt-8  text-white '>
      <h2>InstAbout</h2>
      <div>
          <div className='flex flex-col gap-y-5 pt-12 text-xl   '>
    
     <Link to="/">
     <div className='flex gap-x-4 items-center hover:bg-[#4b4848]  px-4 py-3 rounded-lg '>
           <SlHome />
            <p>Home</p>
           </div>
     </Link>
       
 
            <div className='flex gap-x-4 items-center hover:bg-[#4b4848]  px-4 py-3 rounded-lg '>
            <TbVirusSearch />
            <p>Search</p>
           </div>
            
           <div className='flex gap-x-4 items-center hover:bg-[#4b4848] px-4 py-3 rounded-lg '>
           <IoSend  className='text-[#ffff00]'/>
            <p>Create</p>
           </div>
           
            <div className='flex gap-x-4 items-center hover:bg-[#4b4848]  px-4 py-3 rounded-lg '>
            <MdExplore />
            <p>Explore</p>
           </div>
 
           <div className='flex gap-x-4 items-center hover:bg-[#4b4848] px-4 py-3 rounded-lg '>
           <BiSolidMessage />
            <p>Message</p>
           </div>
 
            <div className='flex gap-x-4 items-center hover:bg-[#4b4848] px-4 py-3 rounded-lg '>
            <FcDoNotInhale className='text-[#ffa726]' />
            <p>Notificaiton</p>
           </div> 
 
           
 
      
        <Link to='/profile'>
        <div className='flex gap-x-4 items-center ml-4  hover:bg-[#4b4848]'>
               <p>Profile</p>
           </div> 
        </Link>
          
        <Flex className="justify-end bg-[#52522f] rounded-lg duration-500 px-4 py-3 hover:bg-[#1a1a1a]">
        <CiLogout onClick={handleLogOut} className='text-3xl  text-white ' />
        </Flex>
      
          </div>
      </div>
   </div>   

  
    

</section>
 </section>   
                            
    
    
    
    
    
    
    
    
        </section>
  
  )
}

export default SideBar
