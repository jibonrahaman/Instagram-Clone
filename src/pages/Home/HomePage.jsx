

// function HomePage() {
//

//   return (
//    
//   )
// }

// export default HomePage

import React from 'react'
import Flex from '../../Components/Flex'
import { CgStories } from "react-icons/cg";
import user from '../../assets/user.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
function HomePage() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <section className='w-[60%] px-32'>
      <div className=' bg-[#242526] px-3 py-5' >
        <Flex className=" text-3xl items-center text-center gap-x-1">
          <CgStories className="mt-1 text-[#0866ff]" />
          <h2 className=" text-[#0866ff] font-bold">Stories</h2>
        </Flex>
        <p className='mt-1 relative w-48 h-1  bg-[#0866ff] '></p>

   
        <div className=' ' >
       
       <Slider {...settings}>
         <div>
         <img src={user} alt={user} className=' w-[150px] object-cover h-[200px] ' />
       </div>

     
         <Flex className=' relative'>
           <img src={user} alt={user} className='w-10 rounded-full border-4 border-[#0866ff] h-10 absolute top-2 left-2 ' />
           <img src={user} alt={user} className=' rounded-md w-[150px]  h-[200px] object-cover ' />
         </Flex>
      

      
         <Flex className=' relative'>
           <img src={user} alt={user} className='w-10 rounded-full border-4 border-[#0866ff] h-10 absolute top-2 left-2 ' />
           <img src={user} alt={user} className=' rounded-md w-[150px]  h-[200px] object-cover ' />
         </Flex>
      

      
         <Flex className=' relative'>
           <img src={user} alt={user} className='w-10 rounded-full border-4 border-[#0866ff] h-10 absolute top-2 left-2 ' />
           <img src={user} alt={user} className=' rounded-md w-[150px]  h-[200px] object-cover ' />
         </Flex>
       

     
         <Flex className=' relative'>
           <img src={user} alt={user} className='w-10 rounded-full border-4 border-[#0866ff] h-10 absolute top-2 left-2 ' />
           <img src={user} alt={user} className=' rounded-md w-[150px]  h-[200px] object-cover ' />
         </Flex>
      

     
         <Flex className=' relative'>
           <img src={user} alt={user} className='w-10 rounded-full border-4 border-[#0866ff] h-10 absolute top-2 left-2 ' />
           <img src={user} alt={user} className=' rounded-md w-[150px]  h-[200px] object-cover ' />
         </Flex>
      
       </Slider>
     </div>



      </div>

       

    </section>
  )
}

export default HomePage
