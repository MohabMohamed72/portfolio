import React, { useState } from 'react'
import { IoCloseCircle } from 'react-icons/io5'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, Element } from 'react-scroll';
import {useDispatch, useSelector} from 'react-redux'
import { SidebarNotVisable, SidebarVisable } from '../Store/Slices/SidebarSlice';

const Navbar = () => {

    const sidebar = useSelector(state=>state.Sidebar)

    const dispatch = useDispatch()
    
    const [HomeActive , setHomeActive] = useState(false)
    const [AboutActive , setAboutActive] = useState(false)
    const [PortfolioActive , setPortfolioActive] = useState(false)
    const [ContactActive , setContactActive] = useState(false)

    // const [sidebar , setsidebar] = useState(false)
  return (

        <nav className="bg-[#000000c8]  border-gray-200 px-20 max-md:px-5 ">
        <div className=" flex flex-wrap items-center justify-between mx-auto py-4">

            <Link to='#home' smooth={true} duration={500} className="flex items-center space-x-3 rtl:space-x-reverse transition-all duration-700">
                <span className="self-center text-2xl font-semibold text-white whitespace-nowrap ">Portfolio</span>
            </Link>

            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={()=>{dispatch(SidebarVisable())}}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>

            <div className="hidden w-full md:block md:w-auto " id="navbar-default" >
                <ul className={` font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 `} >
                    <li className='cursor-pointer' onClick={()=>{
                        setHomeActive(true);setAboutActive(false);setPortfolioActive(false);setContactActive(false);
                    }} >
                        <Link to='#home' duration={500} smooth={true} className={`${HomeActive ? `text-green-500`:`text-white`} transition-all duration-700 block py-2 px-3   rounded md:bg-transparent  md:p-0  md:hover:text-green-500`} >Home</Link>
                    </li>

                    <li className='cursor-pointer'  onClick={()=>{
                        setHomeActive(false);setAboutActive(true);setPortfolioActive(false);setContactActive(false);
                    }}>
                        <Link to='#about' duration={500} smooth={true} className={`${AboutActive ? `text-green-500`:`text-white`} transition-all duration-700 block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 `} >About</Link>
                    </li>

                    <li className='cursor-pointer'  onClick={()=>{
                        setHomeActive(false);setAboutActive(false);setPortfolioActive(true);setContactActive(false);
                    }}>
                   
                        <Link to='#portfolio' duration={500} smooth={true} className={`${PortfolioActive ? `text-green-500`:`text-white`} transition-all duration-700 block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0`}>Portofolio</Link>
                    </li>
                
                    <li  className='cursor-pointer' onClick={()=>{
                        setHomeActive(false);setAboutActive(false);setPortfolioActive(false);setContactActive(true);
                    }}>
                        <Link to='#contact' duration={500} smooth={true} className={`${ContactActive ? `text-green-500`:`text-white`} transition-all duration-700 block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0`}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className={``} >
                <div className={`${sidebar? `w-1/2`:`w-0 hidden`} absolute right-0 top-0  md:hidden transition-all duration-700 flex flex-col bg-[#000000c8] h-full z-[100] shadow-xl `} onClick={()=>{dispatch(SidebarNotVisable())}}>
                <IoIosCloseCircleOutline className='cursor-pointer text-green-500 mt-2 ml-1 mb-2 size-[20px] ' />
                <ul className=''>
                    <Link to='#home'  duration={500} smooth={true}><li className='text-green-500 font-bold text-[20px] p-2 hover:bg-green-400  hover:text-white cursor-pointer transition-all duration-700 ' onClick={()=>{dispatch(SidebarNotVisable())}}>Home</li></Link>
                    <hr />
                   <Link to='#about' duration={500} smooth={true}> <li className='text-green-500 font-bold text-[20px] p-2 hover:bg-green-400 hover:text-white  cursor-pointer transition-all duration-700 ' onClick={()=>{dispatch(SidebarNotVisable())}}>About</li></Link>
                    <hr />
                    <Link to='#portfolio' duration={500} smooth={true}><li className='text-green-500 font-bold text-[20px] p-2 hover:bg-green-400 hover:text-white  cursor-pointer transition-all duration-700 ' onClick={()=>{dispatch(SidebarNotVisable())}}>Portfolio</li></Link>
                    <hr />
                    <Link to="#contact" duration={500} smooth={true}><li className='text-green-500 font-bold text-[20px] p-2 hover:bg-green-400 hover:text-white  cursor-pointer transition-all duration-700 ' onClick={()=>{dispatch(SidebarNotVisable())}}>Contact</li></Link>
                </ul>
            </div>
        </div>
        </nav>

   
  )
}

export default Navbar