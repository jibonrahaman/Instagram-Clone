import React, { useEffect, useState } from 'react'
import Flex from '../../Components/Flex'
import { getDatabase, onValue, ref } from 'firebase/database';
import { useSelector } from 'react-redux';
import user from '../../assets/user.jpg'
import { Link } from 'react-router-dom';
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
  const handlePeople=()=>{
    console.log("item");
  }


//   <div>
//   {
//     userList.map((item,index)=>(
//      <div key={index}>
//       <Flex className="mt-6 gap-x-1 justify-between">
//  <Flex className="gap-x-2"> 
//  <img src={item.userImgUrl} alt={item.userImgUrl} className='w-12 h-12 rounded-full' />
//      <p className=' text-xl mt-[2px]  '>{item.userName}</p>
//  </Flex>
//  <p className='text-[#004b7b] mt-1 group-hover:text-white duration-300 text-[18px] group-hover:mt-[-10px] '>follow</p>
//    </Flex>
//      </div>
//     ))
//   }
//  </div>
  return (
   <section className='px-4 text-white group '>

     <div className=''>
     {
      data &&
      <Flex className="mt-10 gap-x-1">
     <img src={data.photoURL} alt={data.photoURL} className='w-12 h-12 rounded-full' />
     <p className=' text-xl mt-[2px] '>{data.displayName}</p>
     </Flex>
     }
     </div>
     <Flex className=" mt-8 ml-5 justify-between">      
     <p className=' text-[#a3a3a3]'>Suggested for you</p>  
    <Link to="/people">
    <button onClick={handlePeople}>See all </button> </Link>
     </Flex>
    </section>
  )
}

export default UserList
