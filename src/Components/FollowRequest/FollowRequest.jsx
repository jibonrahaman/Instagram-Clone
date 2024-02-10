import React, { useEffect } from 'react'
import Flex from '../Flex'
import { useSelector } from 'react-redux';
import { getDatabase, onValue, ref } from 'firebase/database';
function FollowRequest() {
  const db = getDatabase();
  const data = useSelector(state => state.userLoginInfo.userInfo)

  useEffect(()=>{
    const followShow = ref(db, 'followRequest/');
    onValue(followShow, (snapshot) => {
        snapshot.forEach((item)=>{
         
        })
     
  })
  }, [])
  return (
    <section className='w-[80%] h-screen overflow-y-scroll bg-[#242526]'>
    <div className='w-[60%] -600 mt-28'>
     <h2 className='text-white ml-36 text-2xl my-2'>Suggested</h2>
       <Flex className=" justify-between mt-5 ml-36" >
     <Flex className="text-white  gap-x-3">
     <img src="" alt=""  className=' w-14 h-14 rounded-full'/>
      <h2 className='mt-2 text-xl'>""</h2>
     </Flex>
     <div>
       {/* <button className=' text-md px-4 py-1 mt-2 bg-[#363636] hover:bg-[#4d4a4a] text-white rounded-md '>Follow</button> */}
            <button className='text-md px-4 py-1 mt-2 bg-[#0095f6] hover:bg-[#1877f2] text-white rounded-md'>Follow</button>
    
     </div>
     </Flex>
   
    </div>
 </section>
  )
}

export default FollowRequest
