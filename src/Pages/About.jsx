import React from 'react'
import { FaDotCircle } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

const About = () => {
  return (
    <div id='about' className=' transition-all duration-700 px-20 w-full mt-[30px]'>
      <div className='w-full ml-auto mr-auto'>
        <h1 className='text-white  text-[45px] font-bold pt-10 text-center '>About <span className='text-green-500  animate-pulse'>Me</span></h1>
      </div>

      <div className='max-md:mt-10 flex w-full max-md:flex-wrap justify-between xl:mt-40 max-md:flex-col max-md:gap-10 md:gap-20 '>
          <div className='text-white  gap-5 flex flex-col text-justify'>
            <div className='flex gap-2 '>
              <FaDotCircle className='text-green-500 text-[20px] mt-1'/>
              <p className='w-full'>Graduated from the Faculty of Engineering of the Mechatronics Department </p>
            </div>
            <div className='flex  gap-2'>
              <FaDotCircle className='text-green-500 text-[20px] mt-1'/>
              <p className='w-full'>Worked as Instructor of Scratch, C programming , Arduino, AVR and AI ,Machine Learning and Computer Vision For 1 Year </p>
            </div>
            <div className='flex  gap-2'>
              <FaDotCircle className='text-green-500 text-[20px] mt-1'/>
              <p className='w-full'>NTI Training 4 Months In Embedded Systems </p>
            </div>
            <div className='flex  gap-2'>
              <FaDotCircle className='text-green-500 text-[20px] mt-1'/>
              <p className='w-full'>I have strong experience in React, HTML, CSS, and JavaScript, which enables me to create dynamic and responsive web applications.</p>
            </div>
          </div>
          <div className='border-2 p-3 border-green-500 rounded-xl px-4'>
            <h1 className='text-white text-center text-[20px] font-bold'>Skills</h1>
            
            <div className='mt-5 flex justify-center flex-wrap gap-7 w-auto h-auto  '>
              <div className='flex flex-col items-center'>
                <FaHtml5 className='text-orange-500 size-[30px]'/>
                <p className='text-white'>HTML</p>
              </div>
              <div className='flex flex-col items-center'>
                <FaCss3 className='text-blue-500 size-[30px]'/>
                <p className='text-white'>CSS</p>
              </div>
              <div className='flex flex-col items-center'>
                <IoLogoJavascript className='text-yellow-400 size-[30px]'/>
                <p className='text-white'>Javascript</p>
              </div>
              <div className='flex flex-col items-center'>
                <FaReact className='text-blue-400 size-[30px]'/>
                <p className='text-white'>React</p>
              </div>
              <div className='flex flex-col items-center'>
                <FaGithub className='text-white size-[30px]'/>
                <p className='text-white'>Git</p>
              </div>
              <div className='flex flex-col items-center'>
                <FaPython className='text-yellow-300 size-[30px]'/>
                <p className='text-white'>Python</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <GiArtificialIntelligence className='text-white size-[30px]'/>
                <p className='text-white'>Machine <br /> Learning</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <p className='text-blue-700 text-[20px] font-[900]'>C</p>
                <p className='text-white '>C Programming</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <GiTeacher className='text-green-500 size-[30px]'/>
                <p className='text-white'>Teaching</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <RiTailwindCssFill className='text-blue-400 size-[30px]'/>
                <p className='text-white'>Tailwind</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <SiRedux className='text-purple-700 size-[30px]'/>
                <p className='text-white'>Redux</p>
              </div>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default About