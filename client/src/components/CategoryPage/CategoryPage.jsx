import React from 'react'
import StoreNavBar from "../landing-page/StoreNavBar";
import CategoryDiv from './CategoryDiv';
import PopularTitles from './PopularTitles';

const CategoryPage = () => {
  return (
    
    <div className='bg-[#171a21] relative'>
        <div className='bg-[rgb(23, 26, 33)] w-full h-[1px]' />
      <StoreNavBar />
      {/* category div w/ bg image from game */}
      <CategoryDiv />
      {/* game w/in category carousel */}
      {/* navebar of categories */}
      {/* Popular titles */}

    </div>
  )
}

export default CategoryPage
