import React from 'react'
import Flex from '../../Components/Flex'
 import user from '../../assets/user.jpg'
function People() {
  return (
    <section className='w-[80%] h-screen overflow-y-scroll'>
       <div className='w-[40%] -600 mt-28'>
        <h2 className='text-white ml-48 my-2'>Suggested</h2>
       <Flex className=" justify-around mt-1">
         <img src={user} alt={user}  className=' w-14 h-14 rounded-full'/>
        </Flex>
       </div>
    </section>
  )
}

export default People
