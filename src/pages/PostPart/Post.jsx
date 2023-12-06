import React from 'react'
import Flex from '../../Components/Flex'
import user from '../../assets/user.jpg'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
function Post() {
  return (
    <section className=' post rounded-lg py-4 bg-[#242526]'>
     <div>
        <Flex className=' relative text-white gap-x-3 items-center px-3'>
            <img src={user} alt={user} className=' w-12 h-12 rounded-full' />
            <div className='' >
             <p className=' text-xl'>Md Shahriar Fardous</p>
            <span className=' text-[#82858a] text-[12px]'>Time 2 pm </span>
            </div>
            <Flex className=" gap-x-9 absolute right-4 text-3xl top-2">
            <CiEdit />
            <MdDelete />
            </Flex>
        </Flex>
     </div>
    </section>
  )
}

export default Post
