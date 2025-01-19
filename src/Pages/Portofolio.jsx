import React, { useState } from 'react'
import img from '../assets/Filmpire.png'
import img2 from '../assets/Ecommerce.png'
import img3 from '../assets/Am.png'
import img4 from '../assets/kasper.png'
import img5 from '../assets/Dashboard.png'

const Portofolio = () => {

  const [Visable1 , setVisable1] =useState(false)
  const [Visable2 , setVisable2] =useState(false)
  const [Visable3 , setVisable3] =useState(false)
  const [Visable4 , setVisable4] =useState(false)
  const [Visable5 , setVisable5] =useState(false)
  return (
    <div id='portfolio' className='mt-20 transition-all scroll-smooth duration-700  px-20 max-sm:px-5 pt-10'>
        <div className='w-full ml-auto mr-auto'>
          <h1 className='text-green-500 animate-pulse  text-[45px] font-bold pt-10 text-center'> Portfolio </h1>
        </div>
        
        <div className='flex gap-3 mt-10 max-sm:flex-col'>

          <div className='cursor-pointer relative rounded-md w-[400px] overflow-hidden max-sm:w-full ' onMouseEnter={()=>{setVisable1(true)}} onMouseLeave={()=>{setVisable1(false)}} onClick={()=>{window.open('https://filmpiren.netlify.app/' , '_blank')}}>
            <img src={img} alt="" className='' />
            <div className={`${Visable1? ` h-3/4 transition-all duration-700`:` h-0`}  absolute bg-[#7dc783da] w-full bottom-0  transition-all duration-700`}>
              <h1 className='text-white font-bold px-5 text-[13px]'>Filmpire</h1>
              <p className='px-5 text-white text-[12px]'>A comprehensive web application that provides an extensive collection of movies, complete with detailed information about each film using React js , Tailwind , Redux Toolkit</p>
            </div>
          </div>

          <div className='cursor-pointer relative rounded-md w-[400px] overflow-hidden max-sm:w-full' onMouseEnter={()=>{setVisable2(true)}} onMouseLeave={()=>{setVisable2(false)}} onClick={()=>{window.open('https://ecommerce8.netlify.app/' , '_blank')}}>
            <img src={img2} alt="" className='' />
            <div className={`${Visable2? ` h-3/4 transition-all duration-700`:` h-0`}  absolute bg-[#7dc783da] w-full bottom-0  transition-all duration-700`}>
              <h1 className='text-white font-bold px-5 text-[13px]'>ForEver</h1>
              <p className='px-5 text-white text-[11px]'> online clothing store, where style meets comfort! Explore our curated collection of trendy apparel for men, women, and children. From casual wear to formal attire, we offer a variety of options to suit every occasion</p>
            </div>
          </div>

          <div className='cursor-pointer relative rounded-md w-[400px] overflow-hidden max-sm:w-full' onMouseEnter={()=>{setVisable3(true)}} onMouseLeave={()=>{setVisable3(false)}} onClick={()=>{window.open('https://ampage.netlify.app/' , '_blank')}}>
            <img src={img3} alt="" className='' />
            <div className={`${Visable3? ` h-3/4 transition-all duration-700`:` h-0`}  absolute bg-[#7dc783da] w-full bottom-0  transition-all duration-700`}>
              <h1 className='text-white font-bold px-5 text-[13px]'>AmRobotics</h1>
              <p className='px-5 text-white text-[12px]'>First page using html and css</p>
            </div>
          </div>

          <div className='cursor-pointer relative rounded-md w-[400px] overflow-hidden max-sm:w-full' onMouseEnter={()=>{setVisable4(true)}} onMouseLeave={()=>{setVisable4(false)}} onClick={()=>{window.open(' https://kasperpage.netlify.app/' , '_blank')}}>
            <img src={img4} alt="" className='' />
            <div className={`${Visable4? ` h-3/4 transition-all duration-700`:` h-0`}  absolute bg-[#7dc783da] w-full bottom-0  transition-all duration-700`}>
              <h1 className='text-white font-bold px-5 text-[13px]'>Kasper</h1>
              <p className='px-5 text-white text-[12px]'>Page Using html and Tailwind And Javascript</p>
            </div>
          </div>
          <div className='cursor-pointer relative rounded-md w-[400px] overflow-hidden max-sm:w-full' onMouseEnter={()=>{setVisable5(true)}} onMouseLeave={()=>{setVisable5(false)}} onClick={()=>{window.open(' https://kasperpage.netlify.app/' , '_blank')}}>
            <img src={img5} alt="" className='' />
            <div className={`${Visable5? ` h-3/4 transition-all duration-700`:` h-0`}  absolute bg-[#7dc783da] w-full bottom-0  transition-all duration-700`}>
              <h1 className='text-white font-bold px-5 text-[13px]'>Dashboard</h1>
              <p className='px-5 text-white text-[12px]'>Dashboard Page Using Html And Tailwind Only</p>
            </div>
          </div>


        </div>
    </div>

    
  )
}

export default Portofolio