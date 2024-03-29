import React, { useEffect } from 'react'
import Flex from '../../Components/Flex'
import user from '../../assets/user.jpg'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Product4 from '../../assets/Product4.png'
import fb from '../../assets/fb.jpg'
import { getDatabase, ref, onValue } from "firebase/database";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
function Post() {
  const [postShow, setpostShow] = useState([]);
  const db = getDatabase();
  const data = useSelector(state => state.userLoginInfo.userInfo)
  const [userList, setuserList] = useState([]);

  useEffect(() => {
    const postRef = ref(db, 'posts/');
    onValue(postRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (data.uid != item.val().postsendid) {
          arr.push(item.val());
        }
      })
      setpostShow(arr)
    });
  }, [])
  return (
    <section className=''>
      {
        postShow.map((item, index) => (
          <section key={index}>
            <div className=' post rounded-lg  pt-4 group  my-8  text-white mt-4 bg-[#242526]'>
              <Flex className=' relative  gap-x-3 items-center px-3'>
                <img src={item.postsendPhoto} alt={item.postsendPhoto} className=' w-12 h-12 rounded-full' />
                <div className='' >
                  <p className=' text-xl'>{item.postsendname}</p>
                  <span className=' text-[#82858a] text-[12px]'>
                    {
                      moment(item.date, "YYYYMMDD hh:mm:ss a").fromNow()
                    }
                  </span>
                </div>
                <Flex className="  gap-x-9 absolute right-4 text-3xl  ">
                  <CiEdit className='group-hover:bg-black rounded-full w-12 h-12 p-2 duration-500' />
                  <MdDelete className='group-hover:bg-black rounded-full w-12 h-12 p-2 duration-500' />
                </Flex>
              </Flex>
              <div >
                <p className=' mx-4 my-3'>{item.text}</p>
                <img src={item.img} alt={item.img} className='w-full  object-cover' />
              </div>
            </div>
          </section>
        ))
      }
    </section>
  )
}

export default Post
