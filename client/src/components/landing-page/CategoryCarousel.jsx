import React from "react";
import { useState } from "react";
import { CATEGORIES } from "./utils";

const CategoryCarousel = () => {
  const [activeCarousel, setActiveCarousel] = useState(1);

  return (
    <div className="carousel-container overflow-x-auto p-4 text-cyan-50 my-8">
      <h2 className="uppercase my-8 font-semibold leading-4">
        Browse By Category
      </h2>
      <div className="carousel-content flex space-x-4">
        {CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="carousel-item flex flex-col items-center"
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
  );
};

export default CategoryCarousel;
