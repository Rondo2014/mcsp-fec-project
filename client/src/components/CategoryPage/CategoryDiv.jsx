import React from 'react'

function CategoryDiv() {
  return (
    <div id='category-Div-container' className=' flex items-center cursor-pointer'>
        <div id='image-container' className=' h-100 w-full bg-cover bg-center relative bg-white/40'
        style={{
            backgroundImage: 'radial-gradient(farthest-side at 50% 20%, rgba(0, 0, 0, 0), black)',
          }}>
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392"
            className='w-full h-full mix-blend-overlay' />
        </div>
        <div id='carousel-container'>
          
        </div>
    </div>
  )
}

export default CategoryDiv
