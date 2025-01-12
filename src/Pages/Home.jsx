import React from 'react'
import Img from '../Components/Img'
import SocialMedia from '../Components/SocialMedia'

const Home = () => {
  return (
    <div id='home' className='px-20  transition-all duration-700'>
      <div className='flex justify-between pt-36 max-md:pt-10 max-md:flex-col max-md:gap-20 items-center '>
        <div>
          <h1 className='text-white text-[25px] font-bold'>Hello It's Me</h1>
          <h1 className='text-white text-[45px] font-bold'>Mohab Mohamed</h1>
          <h1 className='text-white text-[25px] font-bold'>And I'm A <span className='text-green-500 animate-pulse'>Frontend Developer</span></h1>
          <p className='text-white text-[15px] max-w-[360px] mt-5 text-justify'>
          As a passionate Front-End Developer, I specialize in creating dynamic and responsive web applications using React.js, HTML, and CSS. With a keen eye for design and a commitment to user experience, I am always eager to learn and stay updated with the latest trends in front-end development.
          </p>
        </div>
        <div>
          <Img />
        </div>
      </div>

    </div>
  )
}

export default Home