import React from 'react'
import Flex from '../../Components/Flex'
import user from '../../assets/user.jpg'
function Post() {
  return (
    <section className=' post rounded-lg py-4 bg-[#242526]'>
     <div>
        <Flex className=' text-white gap-x-3 items-center px-3'>
            <img src={user} alt={user} className=' w-12 h-12 rounded-full' />
            <div className='' >
             <p className=' text-xl'>Md Shahriar Fardous</p>
            <span className=' text-[#82858a] text-[12px]'>Time 2 pm </span>
            </div>
        </Flex>
     </div>
    </section>
  )
}

export default Post
