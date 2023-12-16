import React, { useEffect, useState } from 'react'
import Flex from '../../Components/Flex'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function UserList() {
  const data =useSelector(state => state.userLoginInfo.userInfo)
 
 
  
  return (
   <section className='px-4 text-white group '>

     <div className=''>
     {
      data &&
      <Flex className="mt-10 gap-x-1">
     <img src={data.photoURL} alt={data.photoURL} className='w-12 h-12 rounded-full' />
     <p className=' text-xl mt-[2px] '>{data.displayName}</p>
     </Flex>
     }
     </div>
     <Flex className=" mt-8 ml-5 justify-between">      
     <p className=' text-[#a3a3a3]'>Suggested for you</p>  
    <Link to="/people">
    <button >See all </button> </Link>
     </Flex>
    </section>
  )
}

export default UserList
