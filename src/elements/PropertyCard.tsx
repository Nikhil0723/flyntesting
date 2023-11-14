import React from 'react';

import {  StarFilled , EnvironmentFilled , DribbbleCircleFilled ,HeartOutlined} from '@ant-design/icons';



const ProductCard = () => {
  const product = {
    name: "Sample Product",
    price: 49.99,
    description: "This is a dummy product description. It's for demonstration purposes.",
    category: "Electronics",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    totalReviews: 35,
  };

  return (
    <>
    <div className='h-[400px] w-[300px] rounded-[10px] border relative'>
     <div className='h[50%] rounded-t-[10px]'>
      <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-full h-full rounded-t-[10px]' />
     <div className=' h-7 w-7 absolute right-4 top-4 flex items-center justify-center bg-white rounded-full'>
     <HeartOutlined className=' text-lg'/>
     </div>
     </div>
     <div className='p-4 flex flex-col gap-3'>
      <div className='flex items-center justify-between'>
        <h1>$900 pcm</h1>
        <div>
        <span><StarFilled className=' text-yellow-500'/><span>4.5</span></span>
        <span className=' text-[#B6BCC3]'><span>(345)</span>Review</span>
        </div>
      </div>
      <div className=' flex flex-col gap-2'>
        <h1>Royale Apartment Plaza</h1>
        <p className='text-[#B6BCC3] text-[12px]'><span><EnvironmentFilled className='mb-3'/></span>Manchester , Greater Manchester</p>
      </div>
      <div className='flex gap-5'>
        <div className='flex flex-col items-center gap-1'>
        <DribbbleCircleFilled className='text-[35px]'/>
        <span className='text-[14px] font-semibold text-[#545E67]'>2 Bed</span>
        </div>
        <div className='flex flex-col items-center gap-1'> 
        <DribbbleCircleFilled className='text-[35px] '/>
        <span  className='text-[14px] font-semibold  text-[#545E67]'>2 Bath</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
        <DribbbleCircleFilled className='text-[35px]'/>
        <span className='text-[14px] font-semibold  text-[#545E67]'>450m</span>
        </div>
      </div>
     </div>
    </div>
    </>
  );
};

export default ProductCard
