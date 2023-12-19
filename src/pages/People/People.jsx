import React, { useEffect, useState } from 'react'
import Flex from '../../Components/Flex'
 import user from '../../assets/user.jpg'
import { useSelector } from 'react-redux';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
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
const [follow,setfollow]=useState(false)
const handleFollowSend =(item)=>{
  console.log(item);
 set(push(ref(db ,"followRequest/")),{
   sendid:data.uid,
  sendername:data.displayName,
  senderimg:data.photoURL,
  receiverid:item.userid,
  receivername:item.userName,
  receiverimg:item.userImgUrl,
 })
}
  return (
    <section className='w-[80%] h-screen overflow-y-scroll bg-[#242526]'>
       <div className='w-[60%] -600 mt-28'>
        <h2 className='text-white ml-36 text-2xl my-2'>Suggested</h2>
       {
        userList.map((item,index)=>(
          <Flex key={index} className=" justify-between mt-5 ml-36" >
        <Flex className="text-white  gap-x-3">
        <img src={item.userImgUrl} alt={item.userImgUrl}  className=' w-14 h-14 rounded-full'/>
         <h2 className='mt-2 text-xl'>{item.userName}</h2>
        </Flex>
        <div>
   
          {/* <button className=' text-md px-4 py-1 mt-2 bg-[#363636] hover:bg-[#4d4a4a] text-white rounded-md '>Follow</button> */}
        
          <button onClick={()=>handleFollowSend(item)} className='text-md px-4 py-1 mt-2 bg-[#0095f6] hover:bg-[#1877f2] text-white rounded-md'>Follow</button>
       
        </div>
        </Flex>
        ))
       }
       </div>
    </section>
  )
}

export default People
