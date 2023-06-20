import React, { useState } from "react";
import { CATEGORIES } from "./utils";

const CategoryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickLeft = () => {
    setActiveIndex((prevIndex) => (prevIndex - 4 + CATEGORIES.length) % CATEGORIES.length);
  };

  const handleClickRight = () => {
    setActiveIndex((prevIndex) => (prevIndex + 4) % CATEGORIES.length);
  };

  const renderCategories = () => {
    const slicedCategories = CATEGORIES.slice(activeIndex, activeIndex + 4);

    return slicedCategories.map((category) => (
      <div key={category.id} className="carousel-item flex flex-col items-center">
        <img
          src={category.image}
          alt={category.name}
          className="w-48 h-32 object-cover rounded-lg hover:shadow-md hover:shadow-[#1A9FFF] mr-2 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
        />
        <p className="mt-2 text-lg font-semibold">{category.name}</p>
      </div>
    ));
  };

  return (
    <div id="carousel" className="flex items-center">
      <div id="carousel-inner" className="text-white pl-5 pt-8 pb-4 flex items-center cursor-pointer ">
        <div id="left-arrow" className="mb-5 bg-cover flex-grow h-full flex items-center justify-center" onClick={handleClickLeft} style={{
          background:
            "linear-gradient( to right, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
            height: "70px",
            width: "35px"
        }}>
           <div
              style={{
                backgroundImage:
                  "url(https://store.cloudflare.steamstatic.com/public/images/v6/arrows.png)",
              }}
              className="w-[23px] h-9 transform rotate-180"
            ></div>
        </div>
        <div id="center">
          <div className="carousel-content flex space-x-4 w-auto h-auto">{renderCategories()}</div>
        </div>
        <div id="right-arrow" className="mb-5 bg-cover flex-grow h-full flex items-center justify-center" onClick={handleClickRight} 
          style={{
            background:
            "linear-gradient( to left, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
            height: "70px",
            width: "35px"
          }}>
           <div
              style={{
                backgroundImage:
                  "url(https://store.cloudflare.steamstatic.com/public/images/v6/arrows.png)",
              }}
              className="w-[23px] h-9 transform"
            ></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
