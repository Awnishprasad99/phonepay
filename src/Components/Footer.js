import React from 'react'
import round from '../asset/Group 2.svg'
const Footer = () => {
  return (
    <div className=' bg-gradient-to-br from-[#011b06]   bg-[#034e13]  '>

<div className='bg-gradient-to-t from-[#011b06]'>

    <span className=' text-center justify-center  font-semibold text-2xl flex pt-5'><h1 className=' text-[#319d47] '>FEE</h1><h1 className='italic text-[#828284]'>PASS</h1> <p className='text-[#bbbbba] ml-1'>powers businesses in every industry</p></span>
      <div className='pl-14 flex justify-between pr-10'>
    <p className='  mt-56 text-white w-[270px] ' >We work with businesses operating in every industry. f you don’t see your industry represented here, contact us today to learn more about our multi- pricing program and other payment solutions. </p>
    <img className=' w-[700px] pt-16' src={round} alt="" />
      </div>
      </div>

    </div>
  )
}

export default Footer
