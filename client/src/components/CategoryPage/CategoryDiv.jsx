import React, { useEffect, useState } from "react";
import Carousel from "./Carousel.jsx";
import { useParams } from "react-router-dom";

function CategoryDiv({
  currentGame,
  setCurrentGame,
  categories,
  transition,
  setTransition,
}) {
  const [games, setGames] = useState({});
  const { id } = useParams();
  return (
    <div
      id="category-Div-container"
      className={`flex items-center cursor-pointer  ${
        transition ? "opacity-0" : "opacity-100"
      } transition-opacity duration-500 ease-in-out`}
    >
      <div
        id="image-container"
        className="h-full w-full bg-cover bg-center"
      ></div>
      <Carousel
        transition={transition}
        setTransition={setTransition}
        categories={categories}
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
        id={id}
      />
    </div>
  );
}

export default CategoryDiv;
