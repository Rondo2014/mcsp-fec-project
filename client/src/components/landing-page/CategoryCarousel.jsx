import React from "react";
import { useState, useEffect } from "react";
import { CATEGORIES } from "./utils";
import api from "../../api/axios.js"

const CategoryCarousel = () => {
  const [activeCarousel, setActiveCarousel] = useState(1);
  const [category, setCategory] = useState([]);

console.log('category', category)

  const chunk = (arr, size) => {
    const newArr = [];
    let id = 1;
    for (let i = 0; i < arr.length; i += size) {
      const chunk = {
        id: id,
        items: arr.slice(i, i + size),
      };
      newArr.push(chunk);
      id++;
    }
    return newArr;
  };

  useEffect(() => {
    try {
      api.get("/api/games/categories").then((res) => {
        const category = chunk(res.data, 4);
        setCategory(category);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleNext = () => {
    setCarouselSlide((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCarouselSlide(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="carousel-container overflow-x-auto p-4 text-cyan-50 my-8">
      <h2 className="uppercase my-8 font-semibold leading-4">
        Browse By Category
      </h2>
      {/* <div
        id="arrow-left"
        className="left-[-46px] absolute top-[38%] w-auto h-auto py-9 px-[11px] cursor-pointer"
        style={{
          background:
            "linear-gradient( to right, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
          backgroundSize: "cover",
        }}
        onClick={handleMinusCarousel}
      >
        <div
          style={{
            backgroundImage:
              "url(https://store.cloudflare.steamstatic.com/public/images/v6/arrows.png)",
          }}
          className="w-[23px] h-9 transform rotate-180"
        ></div>
      </div>
      <div
        id="arrow-right"
        className="right-[-46px] absolute top-[38%] w-auto h-auto py-9 px-[11px] cursor-pointer"
        style={{
          background:
            "linear-gradient( to left, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
          backgroundSize: "cover",
        }}
        onClick={handleAddCarousel}
      >
        <div
          style={{
            backgroundImage:
              "url(https://store.cloudflare.steamstatic.com/public/images/v6/arrows.png)",
          }}
          className="w-[23px] h-9"
        ></div>
      </div> */}
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
