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
        <h1 className='text-white  text-[45px] font-bold p-2 msx-sm:pt-3 text-center z-[100]'>About <span className='text-green-500 white animate-pulsez'>Me</span></h1>
      </div>

        {/* grid grid-cols-2 max-md:grid-cols-1 */}
      <div className='flex flex-col max-md:gap-5  mt-20 ' >

        <div className='w-[70%] ml-auto mr-auto flex flex-col items-center gap-3 myfont2'>
          <button className={`${ExperienceActive? `bg-green-500`:` bg-black`} text-white rounded-md  p-1 w-full sm:w-[40%] text-[18px] transition-all duration-700`} onClick={()=>{setExperienceActive(true) ; setEducationActive(false); setSkillsActive(false);}}>Experience</button>
          <button className={`${EducationActive? `bg-green-500`: ` bg-black`} text-white rounded-md   p-1  w-full  sm:w-[40%] text-[18px] transition-all duration-700`} onClick={()=>{setExperienceActive(false); setEducationActive(true) ; setSkillsActive(false);}}>Education</button>
          <button className={`${SkillsActive? `bg-green-500`:    ` bg-black`} text-white rounded-md      p-1     w-full     sm:w-[40%] text-[18px] transition-all duration-700`} onClick={()=>{setExperienceActive(false); setEducationActive(false); setSkillsActive(true);}}>Skills</button>
        </div>

        <div className='w-full  transition-all duration-700 mt-20'>
          <div className='w-[90%]  h-fit ml-auto mr-auto text-white myfont2  transition-all duration-700'>
            {
              ExperienceActive? <div className='justify-center flex flex-wrap transition-all duration-700 gap-5 max-sm:flex-col '>
                <div className='bg-black p-3 w-[45%] text-justify max-sm:w-full'>
                    <div className='border-2 border-green-500 w-fit ml-auto mr-auto rounded-full p-2 mb-3'>
                      <GiTeacher className='text-green-500 size-5' />
                    </div>
                    <div>
                      <FaDotCircle className='inline-block mr-2 mb-1 text-green-500' />
                      <h1 className='inline'>Worked As Instructor Of Arduino, C Programming, Python, Machine Learning, Computer Vision, AI, Scratch For 1 Year</h1>
                    </div>
                  </div>
                  <div className='bg-black p-3 w-[45%] text-justify max-sm:w-full'>
                    <div className='border-2 border-green-500 w-fit ml-auto mr-auto rounded-full p-2 mb-3'>
                      <MdOutlineWebAsset className='text-green-500 size-5' />
                    </div>
                    <div>
                      <FaDotCircle className='inline-block mr-2 mb-1 text-green-500' />
                      <h1 className='inline'>Experience In Html, Css, JavaScript, React, TailWind, Git, Redux</h1>
                    </div>
                  </div>
                  <div className='bg-black p-3 w-[45%] text-justify max-sm:w-full'>
                    <div className='border-2 border-green-500 w-fit ml-auto mr-auto rounded-full p-2 mb-3'>
                      <MdCastForEducation className='text-green-500 size-5' />
                    </div>
                    <div>
                      <FaDotCircle className='inline-block mr-2 mb-1 text-green-500' />
                      <h1 className='inline'>NTI Training 4 Months</h1>
                    </div>
                  </div>
                  <div className='bg-black p-3 w-[45%] text-justify max-sm:w-full '>
                    <div className='border-2 border-green-500 w-fit ml-auto mr-auto rounded-full p-2 mb-3'>
                      <FaMicrochip className='text-green-500 size-5' />
                    </div>
                    <div>
                      <FaDotCircle className='inline-block mr-2 mb-1 text-green-500' />
                      <h1 className='inline'>Embedded Systems Diploma</h1>
                    </div>
                  </div>
              </div>:EducationActive? <div className='flex justify-center'>

              <div className='bg-black p-3 w-[45%] text-justify max-sm:w-full'>
                    <div className='border-2 border-green-500 w-fit ml-auto mr-auto rounded-full p-2 mb-3'>
                      <FaUniversity className='text-green-500 size-5' />
                    </div>
                    <div>
                      <FaDotCircle className='inline-block mr-2 mb-1 text-green-500 ' />
                      <h1 className='inline'>Graduated from the Faculty of Engineering of the Mechatronics Department</h1>
                    </div>
                  </div>
                 
              </div>:SkillsActive? <div className=' flex justify-center w-full'>

              <div className='mt-1 auto flex gap-3 flex-wrap justify-center '>
                <div className='language-div-logo'>
                  <FaHtml5 className='language-icon-logo text-orange-400' title='HTML'/>
                  <p className='language-text-logo '>Html</p>
                </div>
                <div className='language-div-logo'>
                  <FaCss3 className=' language-icon-logo text-blue-700' title='CSS'/>
                  <p className='language-text-logo'>Css</p>
                </div>
                <div className='language-div-logo'>
                  <IoLogoJavascript className=' language-icon-logo text-yellow-500' title='JavaScript'/>
                  <p className='language-text-logo'>Javascript</p>
                </div>
                <div className='language-div-logo'>
                  <FaReact className='language-icon-logo text-blue-300' title='React'/>
                  <p className='language-text-logo'>React</p>
                </div>
                <div  className='language-div-logo'>
                  <FaGithub className='language-icon-logo' title='Github'/>
                  <p className='language-text-logo'>Github</p>
                </div>
                <div className='language-div-logo'>
                  <RiTailwindCssFill className=' language-icon-logo text-blue-500' title='Tailwind'/>
                  <p className='language-text-logo'>Tailwind</p>
                </div>
                <div className='language-div-logo'>
                  <SiRedux className=' language-icon-logo text-purple-500' title='Redux'/>
                  <p className='language-text-logo'>Redux</p>
                </div>
                <div  className='language-div-logo'>
                  <FaPython className=' language-icon-logo text-yellow-500' title='Python'/>
                  <p className='language-text-logo'>Python</p>
                </div>
                <div  className='language-div-logo'>
                  <GiTeacher className=' language-icon-logo text-green-500' title='Teaching'/>
                  <p className='language-text-logo'>Teaching</p>
                </div>
                <div className='language-div-logo' >
                  <p className='language-icon-logo text-[25px] pl-2 font-[900] text-blue-800 max-sm:-translate-y-3' title='C Programming'>C</p>
                  <p className='language-text-logo'>C Programming</p>
                </div>
                <div  className='language-div-logo'>
                  <GiArtificialIntelligence className='language-icon-logo' title='Machine Learning'/>
                  <p className='language-text-logo'>Machine Learning</p>
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
