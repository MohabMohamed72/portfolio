import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMdDownload } from "react-icons/io";

const SocialMedia = () => {




  return (
    <div className='w-fit max-sm:w-full flex flex-col items-center '>   
        <div className='flex gap-3 max-sm:justify-center   '>
            <div className='p-2 border-2 text-green-500 rounded-full border-green-500 hover:bg-green-400 cursor-pointer hover:text-white duration-700 transition-all ' onClick={()=>{window.open('https://www.facebook.com/profile.php?id=100001211598348' , '_blank')}}>
                    <FaFacebookF   />
                </div>
                <div className='p-2 border-2 text-green-500 rounded-full border-green-500 hover:bg-green-400 cursor-pointer hover:text-white duration-700 transition-all ' onClick={()=>{window.open('https://www.linkedin.com/in/mohab-mohamed-a5121024b/' , '_blank')}}>
                    <FaLinkedin  />
                </div>
                <div className='p-2 border-2 text-green-500 rounded-full border-green-500 hover:bg-green-400 cursor-pointer hover:text-white duration-700 transition-all ' onClick={()=>{window.open('https://github.com/MohabMohamed72' , '_blank')}}>
                    <FaGithub  />
                </div>
                <div className='p-2 border-2 text-green-500 rounded-full border-green-500 hover:bg-green-400 cursor-pointer hover:text-white duration-700 transition-all ' onClick={()=>{window.open('https://www.instagram.com/mohab_mohamed.74/' , '_blank')}}>
                    <FaInstagram  />
                </div>
        </div>
        <div>
            <button className='hover:bg-green-700 flex gap-2 items-center text-white mt-6 rounded-md bg-green-500 p-2' onClick={()=>{window.open('https://drive.google.com/file/d/1riUs7rbpc87Vq4KsIA1dDw8mf3UpUvCl/view?usp=sharing' , '_blank')}} >
                Download CV
                <IoMdDownload className='up-and-down transition-all duration-300' />
            </button> 
        </div>
    </div>  
)
}

export default SocialMedia

