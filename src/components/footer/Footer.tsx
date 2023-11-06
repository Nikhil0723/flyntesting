import React from 'react'
import {EnvironmentFilled ,MailFilled , PhoneFilled} from '@ant-design/icons'
import { Button } from 'antd'


const Footer = () => {
  return (
    <>
 <div className='w-[100vw]'>
<div className=' p-[2%] overflow-x-hidden md:p-[4%] lg:p-[5%] flex  justify-between'>
    <div className='w-[250px] flex flex-col gap-5'>
      <div>
      <h1 className=' font-bold text-3xl' >LOGO</h1>
      </div>
    <div>
    <EnvironmentFilled className='mb-3'/>
    <p className=' '>Street 48 , Cassie Apartment, Greenwood,London , Uk </p>
    </div>
    <div>
      <div  className='flex text-lg gap-3 mb-3'><MailFilled /> <h1 className='font-semibold'>Mail us</h1></div>
      <p>abc@gmail.com</p>
    </div>
    <div>
    <div  className='flex text-lg gap-3 mb-3'><PhoneFilled /> <h1 className='font-semibold'>Contact us</h1></div>
      <p>914250647575</p>
    </div>
  </div>
  <div className='flex justify-center gap-[50px] '>
    <div>
      <h1 className='font-semibold text-[18px] mb-3'>Quick Links</h1>
      <ul className='flex flex-col gap-5'>
        <li>Home</li>
        <li>Buy</li>
        <li>Rent</li>
      </ul>
    </div>
    <div>
      <h1 className='font-semibold text-[18px] mb-3'>Legal</h1>
      <ul className='flex flex-col gap-5'>
        <li>Privacy Policy</li>
        <li>Terms of use</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
    </div>
    <div >
      <h1 className='font-semibold text-[18px] mb-3'>Business with us </h1>
      <ul>
        <li>List with us</li>
      </ul>
    </div>
  </div>
  
  <div>
    <h1 className=" font-semibold text-[18px] mb-3">Subscribe</h1>
    <p className='mb-4'>Subscribe to get latest news and new listings , events.</p>
    <div className='border  h-[46px] flex text-[#B6BCC3] items-center  px-5 rounded-full gap-3'> 
          <input type="text" placeholder='Search' className=' outline-none w-full ' />
          <Button type='default' shape="round">Primary Button</Button>
    </div>
  </div>
 </div>
 <hr  className=' px-[2%]  md:px-[4%] lg:px-[5%] w-[90vw] mx-auto '/>
 <div className='text-center px-5'>
    <p>© 2023 Logo Limited. All rights reserved.</p>
 </div>
 </div>
    </>
  )
}

export default Footer