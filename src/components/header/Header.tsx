import React from 'react'
import { MenuOutlined , SearchOutlined , UserOutlined} from '@ant-design/icons';
import { Avatar, Space } from 'antd';
const Header = () => {
  return (
    <>
     <div className='w-[100vw] h-[120px] px-[2%] md:px-[4%] lg:px-[5%] flex items-center lg:justify-between justify-around'>
      <div className='flex items-center justify-center gap-3'>
         <div className='lg:hidden'><MenuOutlined style={{ fontSize: '32px', color: '#303B45' }} /></div>
        <h1 className=' font-bold text-[32px]' >LOGO</h1></div>
      <div>                                   
        <nav className='flex items-center justify-center  gap-[40px]'>
          <ul className=' gap-[40px] hidden md:flex'>
            <li>Home</li>
            <li>Buy</li>
            <li>Rent</li>
           </ul>
           <div className='border  h-[46px] flex text-[#B6BCC3] items-center  px-5 rounded-full gap-3'> 
           <SearchOutlined className='text-[#858F98]' />
            <input type="text" placeholder='Search' className=' outline-none w-full md:w-2/3 lg:w-1/2 ' />
           </div>
        </nav>
      </div>
      <div className='border h-[46px]  items-center justify-center px-5 rounded-full gap-3 hidden md:flex'>
        <MenuOutlined style={{ fontSize: '18px', color: '#858F98' }} />
        <Avatar icon={<UserOutlined />} />
        </div>
     </div>
    </>
  )
}

export default Header