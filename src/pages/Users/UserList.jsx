import React, { useEffect, useState } from 'react'
import Flex from '../../Components/Flex'
import { getDatabase, onValue, ref } from 'firebase/database';
import { useSelector } from 'react-redux';

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
   <section className='  w-[20%] '>
    <Flex className="  ">
    <h2>name</h2>
    </Flex>
   </section>
  )
}

export default UserList
