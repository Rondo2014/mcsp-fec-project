import React from 'react'

function CategoryDiv() {
  return (
    <div id='container' className='flex items-center cursor-pointer'>
      <div id='left-gradient'></div>
      <div id='background'
      style={{
        backgroundImage:
          "url(https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392)",
          width: "100%",
          height: "650px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
          
      }}>

      </div>
      <div id='right-gradient'></div>
    </div>
  )
}

export default CategoryDiv
