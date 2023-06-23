import React, { useEffect, useState } from "react";
import Carousel from "./Carousel.jsx";
import { useParams } from "react-router-dom";

function CategoryDiv({ currentGame, setCurrentGame, categories }) {
  const [games, setGames] = useState({});
  const { id } = useParams();
  console.log(categories);
  return (
    <div
      id="category-Div-container"
      className="flex items-center cursor-pointer"
    >
      <div
        id="image-container"
        className="h-100 w-full bg-cover bg-center"
      ></div>
      <div id="carousel-container relative">
        <div
          id="carousel-title"
          className="text-white text-5xl font-bold
      absolute top-[320px] left-[855px] drop-shadow-lg"
        >
          {id}
        </div>
        <Carousel
          categories={categories}
          currentGame={currentGame}
          setCurrentGame={setCurrentGame}
        />
      </div>
    </div>
  );
}

export default CategoryDiv;
