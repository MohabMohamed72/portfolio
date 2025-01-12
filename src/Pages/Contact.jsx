import React from 'react'
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import SocialMedia from '../Components/SocialMedia';
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div className='max-md:px-5 px-20 h-fit bg-black mt-20' id ='contact'>
      <h1 className='text-center text-green-500 text-[45px] font-bold animate-pulse'>Contact </h1>
      
    <div className='flex  max-md:flex-col gap-10 '>
      <div className='flex flex-col items-start'>
          <div className='flex flex-col mt-10 gap-2'>
              <div className=' flex items-center gap-2 '>
                <IoIosCall className='text-green-500'/>
                <p className='text-white'>01007599123</p>
              </div>
              <div className=' flex items-center gap-2 '>
                <MdOutlineMail className='text-green-500'/>
                <a href='mailto:mohabmohamedd72@gmail.com' className='text-white'>mohabmohamedd72@gmail.com</a>
              </div>
              <div className=' flex items-center gap-2 '>
                <FaLocationDot className='text-green-500'/>
                <p className='text-white'>Address: Mansoura– Dakahlia</p>
              </div>
          </div>
          <div className='mt-10 max-sm:mt-10' >
            <SocialMedia />
          </div>
        </div>

        <div className='w-[50%] mt-10 ml-auto mr-auto max-md:w-full '>
          <Form />
        </div>
    </div>
     
    </div>
  )
}

export default Contact