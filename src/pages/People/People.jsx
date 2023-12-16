import React, { useEffect, useState } from 'react'
import Flex from '../../Components/Flex'
 import user from '../../assets/user.jpg'
import { useSelector } from 'react-redux';
import { getDatabase, onValue, ref } from 'firebase/database';
function People() {
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
    <section className='w-[80%] h-screen overflow-y-scroll bg-[#242526]'>
       <div className='w-[40%] -600 mt-28'>
        <h2 className='text-white ml-48 my-2'>Suggested</h2>
      
       </div>
    </section>
  )
}

export default People
