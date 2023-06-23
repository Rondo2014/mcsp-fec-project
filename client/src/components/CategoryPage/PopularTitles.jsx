import React from "react";

function PopularTitles({ categories }) {
  return (
    // map over titles fetched and create pop-title div
    <div id="PopularTitles-container" className="mt-[-400px]">
      <div
        id="popular-titles-header"
        className="text-white text-4xl  text-center"
      >
        Popular Titles
      </div>
      <div id="game-grid" className="grid grid-cols-3 gap-16 pb-16 pt-10">
        {categories.map((category) => (
          <div
            key={category.id}
            className="h-[170px] w-[300px] mt-[0px] rounded-lg hover:shadow-md hover:shadow-[#fafafa9b] mr-2 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          >
            <img src={category.game_image} className="" />
            <div className="text-white text-center mt-[3px]">
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularTitles;
