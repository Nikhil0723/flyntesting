import React from 'react'
import CityCard from '../../elements/CityCard.tsx';
import { Link } from 'react-router-dom';
import {ArrowRightOutlined } from '@ant-design/icons'
 
const PopularCities = () => {

   

interface City {
    name: string;
    country: string;
    properties: number;
  }
  
  const popularCities: City[] = [
    {
      name: "New York City",
      country: "United States",
      properties: 8399,
    },
    {
      name: "Tokyo",
      country: "Japan",
      properties: 13928,
    },
    {
      name: "London",
      country: "United Kingdom",
      properties: 8908,
    },
    {
      name: "Paris",
      country: "France",
      properties: 2148,
    },
  
  ];
  

  return (
    <>
    <div className='w-[100vw] my-[35px] px-[2%] md:px-[4%] lg:px-[6%]'>
        <div className='flex items-center justify-between '>
            <h1>Popular Cites</h1>
            <a className='text-blue-800 font-semibold'>View all <ArrowRightOutlined /></a>
        </div>
    <div className="flex flex-nowrap  overflow-x-auto lg:justify-center gap-[20px] mt-[26px]  ">
          {popularCities.map((city, index ) => (
            <CityCard key={index} city={city.name} properties={city.properties} />
          ))}
    </div>
    </div>
    </>
  )
}

export default PopularCities 