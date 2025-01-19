import React from 'react'
import img from '../assets/5771431998890559197.jpg'

const Img = () => {
  return (
    <div className='mr-10 max-md:ml-auto max-md:mr-auto w-fit'>
        <div className='rounded-full max-md:size-[250px] max-sm:size-[170px] size-[300px]  bg-white relative transition-all duration-700 moving-up-down'>
            <div className='size-[300px] max-md:size-[250px] max-sm:size-[170px] overflow-hidden rounded-full'><img src={img} alt="" className='rounded-full  ' /></div>
            <span className='absolute top-[-15px] left-[-15px]  rounded-full size-[330px] max-md:size-[280px] max-sm:size-[200px] border-green-500 border-4  animate-pulse transition-all duration-700'></span>
        </div>
    </div>
  )
}

export default Img