import React from 'react'
import Flex from '../../Components/Flex'
import user from '../../assets/user.jpg'
function Post() {
  return (
    <section className=' post rounded-lg py-4 bg-[#242526]'>
     <div>
        <Flex className=' text-white '>
            <img src={user} alt={user} className=' w-12 h-12 rounded-full' />
            <div className='' >Md Shahriar Fardous</div>
        </Flex>
     </div>
    </section>
  )
}

export default Post
