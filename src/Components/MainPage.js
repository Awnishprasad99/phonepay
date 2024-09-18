import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Hardware from './Hardware';
import Shawn from './Shawn';
import Marketing from './Marketing';
import Become from './Become'
import Last from './Last';

const MainPage = () => {
  return (
    <div className='bg-[#034e13] w-auto min-h-screen'>
      <div className='bg-white  text-center lg:text-right'>
        <span className=' text-[#e58f55] text-xs sm:text-sm lg:text-base lg:mr-4'>
          844-4-FEEPASS | info@getfeepass.com
        </span>
      </div>
      <div className=''>
        <Header/>
        <Footer/>
        <Dashboard/>
        <Hardware/>
        <Shawn/>
        <Marketing/>
        <Become/>
        <Last/>
      </div>
    </div>
  )
}

export default MainPage;
