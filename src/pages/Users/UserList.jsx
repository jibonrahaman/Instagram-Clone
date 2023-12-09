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

     <div className=' fixed px-4'>
     {
      data &&
      <Flex className=" items-center">
     <img src={data.photoURL} alt={data.photoURL} className='w-10 h-10 rounded-full' />
     <p className=' text-xl '>{data.displayName}</p>
     </Flex>
     }
     </div>
 
 
   </section>
  )
}

export default UserList
