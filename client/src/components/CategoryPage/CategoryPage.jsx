import React from 'react'
import StoreNavBar from "../landing-page/StoreNavBar";
import CategoryDiv from './CategoryDiv';
import PopularTitles from './PopularTitles';

const CategoryPage = () => {
  return (
    
    <div className='bg-rgb(23, 26, 33)'>
      <StoreNavBar />
      {/* category div w/ bg image from game */}
      <CategoryDiv />
      {/* game w/in category carousel */}
      {/* navebar of categories */}
      {/* Popular titles */}
      <PopularTitles />

    </div>
  )
}

export default CategoryPage
