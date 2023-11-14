import React from 'react'
import CategoryCarousel from '../components/carousel/category.tsx'
import Scroller from '../components/carousel/scroller.tsx'
import PopularCities from '../components/popularCities/PopularCities.tsx'
import FeaturedProperties from '../components/featuredProperties/FeaturedProperties.tsx'
import ListedProperty from '../components/listing/Listing.tsx'
const Home = () => {
  return (
    <>
    <div>
  {/* <CategoryCarousel/> */}
  <Scroller/>
  <PopularCities/>
  <FeaturedProperties/>
  <ListedProperty/>
    </div>
    </>
  )
}

export default Home