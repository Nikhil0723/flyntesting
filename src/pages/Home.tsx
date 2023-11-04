import React from 'react'
import CategoryCarousel from '../components/carousel/category.tsx'
import Scroller from '../components/carousel/scroller.tsx'
import PopularCities from '../components/popularCities/PopularCities.tsx'
import FeaturedProperties from '../components/featuredProperties/FeaturedProperties.tsx'
const Home = () => {
  return (
    <>
    <div>
  {/* <CategoryCarousel/> */}
  <Scroller/>
  <PopularCities/>
  <FeaturedProperties/>
    </div>
    </>
  )
}

export default Home