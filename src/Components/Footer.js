import React from 'react'
import round from '../asset/Group 2.svg'

const Footer = () => {
  return (
    <div className='bg-[#034e13] w-full'>
      <div className='bg-gradient-to-br from-[#011b06] to-transparent w-full'>
        <div className='bg-gradient-to-t from-[#011b06] to-transparent w-full py-6 px-4 md:px-8 lg:px-14'>
          <span className='text-center font-semibold text-lg md:text-2xl flex flex-wrap justify-center items-center gap-1 mb-6 md:mb-8'>
            <h1 className='text-[#319d47]'>FEE</h1>
            <h1 className='italic text-[#828284]'>PASS</h1>
            <p className='text-[#bbbbba]'>powers businesses in every industry</p>
          </span>
          
          <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8'>
            <p className='text-white max-w-xs md:max-w-sm text-center md:text-left order-2 md:order-1'>
              We work with businesses operating in every industry. If you don't see your industry represented here, contact us today to learn more about our multi-pricing program and other payment solutions.
            </p>
            <img 
              className='w-full max-w-xs md:max-w-md lg:max-w-lg order-1 md:order-2' 
              src={round} 
              alt="Industries" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
