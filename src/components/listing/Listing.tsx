import { Button, Select } from 'antd'
import React from 'react'
import {DownloadOutlined , EnvironmentFilled} from '@ant-design/icons'
import PropertyCard from '../../elements/PropertyCard.tsx'

const ListedProperty = () => {


  return (
  
        <div className='w-[100vw] my-[35px] px-[2%] md:px-[4%] lg:px-[6%]'>
        <nav className='w-full flex items-center justify-between'>
        <ul className='flex gap-[40px]'>
          <li className=' font-semibold text-[#2B63E1]'>All Listings</li>
          <li className=' font-semibold text-[#B6BCC3]'>Recently added</li>
          <li className=' font-semibold text-[#B6BCC3]'>Featured</li>
        </ul>
        <Button type="default" shape="round" icon={<DownloadOutlined />} className=' font-semibold text-lg flex items-center py-4'>
            Filters
        </Button>
      </nav>
      <div className='flex items-center justify-between  mt-[26px]'>
      <div className='flex gap-[40px]'> 
      <Select
      defaultValue="apartment"
      style={{   width:'120px' , }}
     
      options={[
        { value: 'apartment', label: 'Apartment' },
        { value: 'house', label: 'House' },
        { value: 'condo', label: 'Condo' },
        { value: 'townhouse', label: 'Townhouse' },
        { value: 'loft', label: 'Loft' },
        { value: 'duplex', label: 'Duplex' },
        { value: 'studio', label: 'Studio Apartment' },
        { value: 'penthouse', label: 'Penthouse' },
        { value: 'villa', label: 'Villa' },
        { value: 'bungalow', label: 'Bungalow' },
       ]}
       
      />
      
      <Select
      defaultValue="0-1000"
      style={{ width:'120px' ,  }}
      options={[
        { value: '0-1000', label: '$0 - $1000' },
        { value: '1001-1500', label: '$1001 - $1500' },
        { value: '1501-2000', label: '$1501 - $2000' },
        { value: '2001-2500', label: '$2001 - $2500' },
        { value: '2501-3000', label: '$2501 - $3000' },
        { value: '3001-3500', label: '$3001 - $3500' },
       ]}
      />
      <Select
      defaultValue="1 Bedroom"
      style={{ width:'120px' }}
      options={[
        { value: 1, label: '1 Bedroom' },
        { value: 2, label: '2 Bedrooms' },
        { value: 3, label: '3 Bedrooms' },
        { value: 4, label: '4 Bedrooms' },
        { value: 5, label: '5 Bedrooms' },
        { value: 6, label: '6 Bedrooms' },
       ]}
      />
      <Select
      defaultValue="50 sqm "
      style={{ width:'120px'  }}
      options={[
        { value: 50, label: '50 sqm' },
        { value: 75, label: '75 sqm' },
        { value: 100, label: '100 sqm' },
        { value: 125, label: '125 sqm' },
        { value: 150, label: '150 sqm' },
        { value: 175, label: '175 sqm' },
       ]}
      />
      </div>
      <div>
      <Button type="default" shape="round" icon={<EnvironmentFilled />} className=' flex items-center py-4'>
            Get Location
        </Button>
      </div>
      </div>
    <div className="flex flex-nowrap  overflow-x-auto lg:justify-center gap-[20px] mt-[26px]  ">
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
    </div>
    </div>
  )
}

export default ListedProperty