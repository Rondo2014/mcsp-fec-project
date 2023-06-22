import React from 'react'
import StoreNavBar from "../landing-page/StoreNavBar";
import CategoryDiv from './CategoryDiv';
import PopularTitles from './PopularTitles';

const CategoryPage = () => {
  return (
    
    <div className='bg-[#0E131B]'>
      <StoreNavBar />
      {/* category div w/ bg image from game */}
      <CategoryDiv />
      {/* game w/in category carousel */}
      {/* navebar of categories */}
      {/* Popular titles */}
      <div id='popular-titles-container' className='grid-cols-3'>
      <PopularTitles />
      </div>

    </div>
  )
}

export default CategoryPage
