import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaRegHandPointDown} from 'react-icons/fa'

import email from '../assets/email.jpg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Verifyemail() {
    const navigate =useNavigate();
    const data =useSelector(state => state.userLoginInfo.userInfo)
    const handleBack = () => {
       navigate('/login-signup')
      }
  return (
    <div>
       <div className='h-screen '>
          {/* veryfemail */}

          <div className='mx-auto  items-center text-center pt-24 group '>
            <h2 className=' text-5xl text-[#777]'>Verify Your Email</h2>
            <h2 className='text-[#777] mt-5 text-3xl group-hover:text-signBtn duration-300 '>
              Cheak your email & click the link-
              <TypeAnimation
                sequence={[
                  '  to active  your account',
                  1000,
                  ' to active  your account',
                  1000,
                ]}
                wrapper="span"
                speed={30}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </h2>
            <div className='relative'>
              <img src={email} alt={email} className='mx-auto w-[600px] h-[400px]' />
              <FaRegHandPointDown className=' text-red-900 duration-500  text-3xl group-hover:text-signBtn absolute top-[93%] left-[50%]' />
            </div>
            <div >
              <button onClick={handleBack} className="px-7 py-2 mt-3 mx-auto border bg-[#5d5a5a] text-white hover:bg-black hover:text-white duration-500 rounded-lg bg-signBtn " >Back to Login</button>
            </div>
          </div>
          {/* veryfemail */}
        </div>
    </div>
  )
}

export default Verifyemail
