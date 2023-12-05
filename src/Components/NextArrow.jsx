
import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";


const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
        className={`flex justify-center items-center z-10  w-11 h-11 text-[#FFFFFF] rounded-full bg-[#3e4042] hover:bg-[#525355] duration-300 cursor-pointer  absolute top-1/3 right-4`}
       
        onClick={onClick}
      >
      <MdOutlineArrowForwardIos size={30} />

      </div>
  
    );
}

export default NextArrow