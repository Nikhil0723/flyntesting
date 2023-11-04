import React from 'react'
import {ArrowRightOutlined } from '@ant-design/icons'
import PropertyCard from '../../elements/PropertyCard.tsx'
 
const FeaturedProperties = () => {

   
  
  

  return (
    <>
    <div className='w-[100vw] my-[35px] px-[2%] md:px-[4%] lg:px-[6%]'>
        <div className='flex items-center justify-between '>
            <h1>Featured Properties</h1>
            <a className='text-blue-800 font-semibold'>View all <ArrowRightOutlined /></a>
        </div>
    <div className="flex flex-wrap   lg:justify-center gap-[20px] mt-[26px]  ">
          <PropertyCard/>
    </div>
    </div>
    </>
  )
}

export default FeaturedProperties 