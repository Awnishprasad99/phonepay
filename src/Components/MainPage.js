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
    <div className='bg-[#034e13] w-auto h-screen'>

<span className='mt-3 ml-[950px] inline-block text-[#e58f55] text-sm pb-2'>844-4-FEEPASS | info@getfeepass.com</span>
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
