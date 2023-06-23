import React from 'react'

function PopularTitles() {
  return (
    // map over titles fetched and create pop-title div
    <div id='PopularTitles-container'>
      <div id='popular-titles-header' className='text-white text-4xl font-bold text-center'>
        Popular Titles
      </div>
      <div id='game-grid' className='grid grid-rows-3  gap-4'>
        <div id='game' className='h-[100] w-[150]'></div>
        <div id='game' className='h-[100] w-[150]'></div>
        <div id='game' className='h-[100] w-[150]'></div>
      </div>
    </div>
  )
}

export default PopularTitles
