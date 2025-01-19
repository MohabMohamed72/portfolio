import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosCall } from 'react-icons/io'
import { MdOutlineMail } from 'react-icons/md'

const PersonalData = () => {
  return (
    <div className='flex flex-col mt-10 gap-2'>
    <div className=' flex items-center gap-2 '>
      <IoIosCall className='text-green-500'/>
      <p className='text-white'>01007599123</p>
    </div>
    <div className=' flex items-center gap-2 '>
      <MdOutlineMail  className='text-green-500'/>
      <a href='mailto:mohabmohamedd72@gmail.com' className='text-white'>mohabmohamedd72@gmail.com</a>
    </div>
    <div className=' flex items-center gap-2 '>
      <FaLocationDot className='text-green-500'/>
      <p className='text-white'>Address: Mansoura– Dakahlia</p>
    </div>
</div>
  )
}

export default PersonalData