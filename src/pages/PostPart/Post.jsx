import React, { useEffect } from 'react'
import Flex from '../../Components/Flex'
import user from '../../assets/user.jpg'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Product4 from '../../assets/Product4.png'
import fb from '../../assets/fb.jpg'
import { getDatabase, ref, onValue } from "firebase/database";
import { useState } from 'react';
function Post() {
  const [postShow, setpostShow] =useState([]);
  const db = getDatabase();
useEffect(()=>{
  const postRef = ref(db, 'posts/');
  onValue(postRef, (snapshot) => {
    let arr =[]
    snapshot.forEach((item)=>{
     arr.push(item.val());
    })
    setpostShow(arr)
  });
}, [])
  return (
    <section className=' post rounded-lg py-4 mt-4 bg-[#242526]'>
     <div className='group text-white'>
        <Flex className=' relative  gap-x-3 items-center px-3'>
            <img src={user} alt={user} className=' w-12 h-12 rounded-full' />
            <div className='' >
             <p className=' text-xl'>Md Shahriar Fardous</p>
            <span className=' text-[#82858a] text-[12px]'>Time 2 pm </span>
            </div>
            <Flex className="  gap-x-9 absolute right-4 text-3xl  ">
            <CiEdit className='group-hover:bg-black rounded-full w-12 h-12 p-2 duration-500' />
            <MdDelete  className='group-hover:bg-black rounded-full w-12 h-12 p-2 duration-500'/>
            </Flex>
        </Flex>

        <div >
       <p className=' mx-4 my-3'>Ens with an idea..😊🧠
#mernstack #cl thing  begins with an idea..😊🧠
#mernstack #classtimeEvery thing  begins with an idea..😊🧠
#mernstack #classtime</p>
    <img src={Product4} alt={Product4} className='w-full object-cover'/>
        </div>
     </div>
    </section>
  )
}

export default Post
