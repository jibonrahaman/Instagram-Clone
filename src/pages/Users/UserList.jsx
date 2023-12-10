import React, { useEffect, useState } from 'react'
import Flex from '../../Components/Flex'
import { getDatabase, onValue, ref } from 'firebase/database';
import { useSelector } from 'react-redux';
import user from '../../assets/user.jpg'
function UserList() {
  const data =useSelector(state => state.userLoginInfo.userInfo)
  const db =getDatabase();
  const [userList , setuserList] =useState([]);
  useEffect(() => {
    const userRef = ref(db, 'users/');
    onValue(userRef, (snapshot) => {
      let arr = []
      snapshot.forEach(item => {
        if (data.uid != item.key) {
          arr.push({ ...item.val(), userid: item.key });
        }
      })
      setuserList(arr)
    });
  }, [])
  return (
   <section className=' text-white '>

     <div className=''>
     {
      data &&
      <Flex className="mt-6 gap-x-1">
     <img src={data.photoURL} alt={data.photoURL} className='w-12 h-12 rounded-full' />
     <p className=' text-xl mt-[2px] '>{data.displayName}</p>
     </Flex>
     }
     </div>
     <p className='mt-8 ml-4 text-[#a3a3a3]'>Suggested for you</p>
     <div>
      {
        userList.map((item,index)=>(
         <div key={index}>
          <Flex className="mt-6 gap-x-1 text-center items-center ">
     <img src={item.userImgUrl} alt={item.userImgUrl} className='w-12 h-12 rounded-full' />
     <Flex className="items-center justify-between  ">
     <p className=' text-xl mt-[2px] '>{item.userName}</p>
     <button className='text-[#004b7b] hover:text-white duration-300 text-[18px] mt-1 '>follow</button>
     </Flex>
     </Flex>
         </div>
        ))
      }
     </div>
 
   </section>
  )
}

export default UserList
