import React, { useEffect, useState } from 'react';
import Carousel from './Carousel.jsx';
import { useParams } from "react-router-dom";

function CategoryDiv({ currentGame, setCurrentGame, allGames }) {
  const [games, setGames] = useState({});
  const { id } = useParams();
  console.log(allGames)
  return (
    <div id='category-Div-container' className='flex items-center cursor-pointer'>
      <div
        id='image-container'
        className='h-100 w-full bg-cover bg-center bg-white/100'
        style={{
          backgroundImage: 'radial-gradient(farthest-side at 50% 40%, rgba(0, 0, 0, 0) 70%, black), linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 10%, black 1%, rgba(0, 0, 0, 0.5))',
          maskImage: 'radial-gradient(ellipse at 50% 10%, black 1%, rgba(0, 0, 0, 0.5))',
        }}
      >
        <img
          src="https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392"
          className='w-full h-[700px] mix-blend-overlay'
          alt="Category Image"
        />
      </div>
      <div id='carousel-container relative'>
      <div id='carousel-title' className='text-white text-5xl font-bold
      absolute top-[240px] left-[480px] drop-shadow-lg'>
          {id}
      </div>
        <Carousel 
          allGames={allGames}
          currentGame={currentGame}
          setCurrentGame={setCurrentGame}
        />
      </div>
    </div>
  );
}

export default CategoryDiv;
