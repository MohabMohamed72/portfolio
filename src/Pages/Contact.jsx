import React from 'react'
import { IoIosCall, IoMdDownload } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import SocialMedia from '../Components/SocialMedia';
import Form from '../Components/Form'
import PersonalData from '../Components/PersonalData';

const Contact = () => {
  return (
    <div className='max-md:px-5 pb-10 px-20 h-fit bg-black mt-20' id ='contact'>
      
      <h1 className=' text-center text-green-500 text-[45px] font-bold animate-pulse'>Contact </h1>
      
      <div className='flex justify-between max-sm:flex-col  items-center mt-10  max-md:gap-10 max-sm:mt-0 '>
            <PersonalData />
            <div className='mt-auto mb-auto md:mr-28'>
              <SocialMedia /> 
            </div>

            <div className='flex flex-col gap-5 items-center'>
                <button className='hover:bg-green-700 flex gap-2 items-center text-white  rounded-md bg-green-500 p-2 ' onClick={()=>{window.open('https://drive.google.com/file/d/1riUs7rbpc87Vq4KsIA1dDw8mf3UpUvCl/view?usp=sharing' , '_blank')}} >
                    Download CV
                    <IoMdDownload className='up-and-down transition-all duration-300' />
                </button> 
                <a className='' href="mailto:mohabmohamedd772@gmail.com"><button className='hover:bg-green-700 bg-green-500 text-white p-2 rounded-md max-sm:w-fit '>Send Email</button></a>
            </div>
        
      </div>
     
    </div>
  )
}

export default Contact