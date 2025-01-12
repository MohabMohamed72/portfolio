import React from 'react'

const Form = () => {
  return (
    <form action="" className='flex flex-col'>
        <input type="text" placeholder='Username...' className=' bg-gray-800 rounded-md p-2 text-gray-200 focus:border-none focus:outline-none' />
        <input type="email" placeholder='Email...'  className='mt-3  bg-gray-800 rounded-md p-2 text-gray-200 focus:border-none focus:outline-none' />
        <textarea name="" placeholder='Your Message ...' className='mt-3  bg-gray-800 rounded-md p-2 text-gray-200 focus:border-none focus:outline-none h-[300px]'></textarea>
        <button type='submit' className='text-white rounded-md bg-green-500 p-2 w-fit mt-5 mb-10 hover:bg-green-700'>Send Message</button>
  </form>
  )
}

export default Form