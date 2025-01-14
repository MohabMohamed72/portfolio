import React, { useState } from 'react'
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
import { MdCastForEducation } from "react-icons/md";
import { FaMicrochip } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

const About = () => {

  const [ExperienceActive ,setExperienceActive] = useState(true)
  const [EducationActive ,setEducationActive] = useState(false)
  const [SkillsActive ,setSkillsActive] = useState(false)

  return (
    <div id='about' className=' transition-all duration-700  max-md:px-5 w-full mt-[30px] '>

      <div className='w-fit ml-auto mr-auto relative  z-[100] '>
        <h1 className='text-white  text-[45px] font-bold p-2 msx-sm:pt-3 text-center z-[100]'>About <span className='text-green-500 white animate-pulse'>Me</span></h1>
      </div>

      <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:gap-5  mt-20 ' >

        <div className='w-full  flex flex-col items-center gap-3 myfont2'>
          <button className={`${ExperienceActive? `bg-green-500`:`bg-gray-800`} text-white rounded-md bg-gray-800 p-1 w-full sm:w-[40%] text-[18px] transition-all duration-700`} onClick={()=>{setExperienceActive(true) ; setEducationActive(false); setSkillsActive(false);}}>Experience</button>
          <button className={`${EducationActive? `bg-green-500`:`bg-gray-800`} text-white rounded-md bg-gray-800 p-1 w-full  sm:w-[40%] text-[18px] transition-all duration-700`} onClick={()=>{setExperienceActive(false); setEducationActive(true) ; setSkillsActive(false);}}>Education</button>
          <button className={`${SkillsActive? `bg-green-500`:`bg-gray-800`} text-white rounded-md bg-gray-800 p-1 w-full     sm:w-[40%] text-[18px] transition-all duration-700`} onClick={()=>{setExperienceActive(false); setEducationActive(false); setSkillsActive(true);}}>Skills</button>
        </div>

        <div className='w-full  transition-all duration-700 '>
          <div className='w-[90%]  h-fit ml-auto mr-auto text-white myfont2  transition-all duration-700'>
            {
              ExperienceActive? <div className='flex flex-wrap transition-all duration-700 gap-5 max-sm:flex-col '>
                <div className='bg-gray-800 p-3 w-[45%] text-justify max-sm:w-full'>
                    <div className='border-2 border-green-500 w-fit ml-auto mr-auto rounded-full p-2 mb-3'>
                      <GiTeacher className='text-green-500 size-5' />
                    </div>
                    <div>
                      <FaDotCircle className='inline-block mr-2 mb-1 text-green-500' />
                      <h1 className='inline'>Worked As Instructor Of Arduino, C Programming, Python, Machine Learning, Computer Vision, AI, Scratch For 1 Year</h1>
                    </div>
                  </div>
                  <div className='bg-gray-800 p-3 w-[45%] text-justify max-sm:w-full'>
                    <div className='border-2 border-green-500 w-fit ml-auto mr-auto rounded-full p-2 mb-3'>
                      <MdOutlineWebAsset className='text-green-500 size-5' />
                    </div>
                    <div>
                      <FaDotCircle className='inline-block mr-2 mb-1 text-green-500' />
                      <h1 className='inline'>Experience In Html, Css, JavaScript, React, TailWind, Git, Redux</h1>
                    </div>
                  </div>
                  <div className='bg-gray-800 p-3 w-[45%] text-justify max-sm:w-full'>
                    <div className='border-2 border-green-500 w-fit ml-auto mr-auto rounded-full p-2 mb-3'>
                      <MdCastForEducation className='text-green-500 size-5' />
                    </div>
                    <div>
                      <FaDotCircle className='inline-block mr-2 mb-1 text-green-500' />
                      <h1 className='inline'>NTI Training 4 Months</h1>
                    </div>
                  </div>
                  <div className='bg-gray-800 p-3 w-[45%] text-justify max-sm:w-full '>
                    <div className='border-2 border-green-500 w-fit ml-auto mr-auto rounded-full p-2 mb-3'>
                      <FaMicrochip className='text-green-500 size-5' />
                    </div>
                    <div>
                      <FaDotCircle className='inline-block mr-2 mb-1 text-green-500' />
                      <h1 className='inline'>Embedded Systems Diploma</h1>
                    </div>
                  </div>
              </div>:EducationActive? <div className='flex justify-center'>

              <div className='bg-gray-800 p-3 w-[45%] text-justify max-sm:w-full'>
                    <div className='border-2 border-green-500 w-fit ml-auto mr-auto rounded-full p-2 mb-3'>
                      <FaUniversity className='text-green-500 size-5' />
                    </div>
                    <div>
                      <FaDotCircle className='inline-block mr-2 mb-1 text-green-500 ' />
                      <h1 className='inline'>Graduated from the Faculty of Engineering of the Mechatronics Department</h1>
                    </div>
                  </div>
                 
              </div>:SkillsActive? <div className='w-full flex justify-center'>
              <div className='mt-5 auto flex gap-3 flex-wrap justify-center'>
                <div className='w-[20%] h-[60px] p-2 bg-gray-900 '>
                  <FaHtml5 className=' size-[30px] ml-auto mr-auto mt-2 hover:text-green-500' title='HTML'/>
                </div>
                <div className='w-[20%] h-[60px] p-2 bg-gray-900'>
                  <FaCss3 className=' size-[30px] ml-auto mr-auto mt-2 hover:text-green-500' title='CSS'/>
                </div>
                <div className='w-[20%] h-[60px] p-2 bg-gray-900'>
                  <IoLogoJavascript className=' size-[30px] ml-auto mr-auto mt-2 hover:text-green-500' title='JavaScript'/>
                </div>
                <div className='w-[20%] h-[60px] p-2 bg-gray-900'>
                  <FaReact className='size-[30px] ml-auto mr-auto mt-2 hover:text-green-500' title='React'/>
                </div>
                <div  className='w-[20%] h-[60px] p-2 bg-gray-900'>
                  <FaGithub className='text-white size-[30px] ml-auto mr-auto mt-2 hover:text-green-500' title='Github'/>
                </div>
                <div className='w-[20%] h-[60px] p-2 bg-gray-900'>
                  <RiTailwindCssFill className=' size-[30px] ml-auto mr-auto mt-2 hover:text-green-500' title='Tailwind'/>
                </div>
                <div className='w-[20%] h-[60px] p-2 bg-gray-900'>
                  <SiRedux className=' size-[30px] ml-auto mr-auto mt-2 hover:text-green-500' title='Redux'/>
                </div>
                <div  className='w-[20%] h-[60px] p-2 bg-gray-900'>
                  <FaPython className=' size-[30px] ml-auto mr-auto mt-2 hover:text-green-500' title='Python'/>
                </div>
                <div  className='w-[20%] h-[60px] p-2 bg-gray-900'>
                  <GiTeacher className=' size-[30px] ml-auto mr-auto mt-2 hover:text-green-500' title='Teaching'/>
                </div>
                <div className='w-[20%] h-[60px] p-2 bg-gray-900' >
                  <p className=' text-[30px] font-[900] w-fit ml-auto mr-auto hover:text-green-500' title='C Programming'>C</p>
                </div>
                <div  className='w-[20%] h-[60px] p-2 bg-gray-900'>
                  <GiArtificialIntelligence className='text-white size-[30px] ml-auto mr-auto mt-2 hover:text-green-500' title='Machine Learning'/>
                </div>
            </div>
              </div>:null
            }
          </div>
        </div>
      </div>
    
      
    </div>
  )
}

export default About
