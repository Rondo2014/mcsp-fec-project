import React from "react";
import { useState } from "react";
import { CATEGORIES } from "./utils";

const CategoryCarousel = () => {
  const [currentCarousel, setCurrentCarousel] = useState(1);

  const handleLeftArrowClick = () => {
    setCurrentCarousel((prev) => (prev - 1 + CATEGORIES.length) % CATEGORIES.length + 1);
  };

  const handleRightArrowClick = () => {
    setCurrentCarousel((prev) => (prev % CATEGORIES.length) + 1);
  };

  // const chunk = (arr, size) => {
  //   const newArr = [];
  //   let id = 1;
  //   for (let i = 0; i < arr.length; i += size) {
  //     const chunk = {
  //       id: id,
  //       items: arr.slice(i, i + size),
  //     };
  //     newArr.push(chunk);
  //     id++;
  //   }
  //   return newArr;
  // };

  // useEffect(() => {
  //   try {
  //     api.get("/api/games/featured").then((res) => {
  //       const featuredGames = chunk(res.data, 4);
  //       setFeaturedGames(featuredGames);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);


  return (
    <div className="flex items-center  text-white pt-7">
      <div
        className="left-arrow p-2 cursor-pointer"
        onClick={handleLeftArrowClick}
      >
        Left Arrow
      </div>
      <div className="carousel">
        <div className="carouselInner">
          <div className="carousel-content flex space-x-4">
            {CATEGORIES.map((category, index) => (
              <div
                key={category.id}
                className={`carousel-item flex flex-col items-center ${
                  index + 1 === currentCarousel ? "active" : ""
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-48 h-32 object-cover rounded-lg hover:shadow-md hover:shadow-[#1A9FFF] mr-2 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                />
                <p className="mt-2 text-lg font-semibold">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="right-arrow p-2 cursor-pointer"
        onClick={handleRightArrowClick}
      >
        Right Arrow
      </div>
    </div>
  );
};

export default CategoryCarousel;
