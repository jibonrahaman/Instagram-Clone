
import React from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
        className={`flex justify-center items-center z-10  w-11 h-11 text-[#FFFFFF] rounded-full bg-[#3e4042] hover:bg-[#525355] duration-300 cursor-pointer  absolute top-1/3 left-4`}
       
        onClick={onClick}
      >
        <MdOutlineArrowBackIos size={30} />
      </div>
  
    );
}

export default PrevArrow