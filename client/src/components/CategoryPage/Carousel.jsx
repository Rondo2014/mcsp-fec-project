import React, { useState, useEffect } from "react";

function Carousel({ currentGame, setCurrentGame, categories }) {
  //all games is an array of objects,
  //currentGame is an index of an object in the array
  const handleRightClick = () => {
    currentGame === categories.length - 1
      ? setCurrentGame(0)
      : setCurrentGame(currentGame + 1);
  };
  const handleLeftClick = () => {
    currentGame === 0
      ? setCurrentGame(categories.length - 1)
      : setCurrentGame(currentGame - 1);
  };

  return (
    <div
      id="carousel-container"
      className="absolute w-[940px] mx-auto top-0 left-0 right-0 bg"
    >
      <div
        id="left-arrow"
        className="relative left-[-60px] top-[500px] z-50 mb-5 bg-cover flex-grow h-full flex items-center justify-center"
        style={{
          background:
            "linear-gradient( to right, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
          height: "200px",
          width: "35px",
        }}
        onClick={handleLeftClick}
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
        id="right-arrow"
        className=" mb-5 relative top-[270px] left-[950px] z-50 bg-cover flex-grow h-full flex items-center justify-center"
        style={{
          background:
            "linear-gradient( to left, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
          height: "200px",
          width: "50px",
        }}
        onClick={handleRightClick}
      >
        <div
          style={{
            backgroundImage:
              "url(https://store.cloudflare.steamstatic.com/public/images/v6/arrows.png)",
          }}
          className="w-[23px] h-9 transform"
        ></div>
      </div>
      <div className="z-10">
        <div
          id="carousel"
          className="h-[400px] w-[940px] mx-auto relative flex grid-cols-2"
        >
          <div
            id="game-image"
            className="drop-shadow-lg"
            style={{
              background: "rgba(0,0,0,.3098039216)",
              backdropFilter: "blur(20px)",
            }}
          >
            <img
              src={categories[currentGame].game_image}
              className="object-center object-cover h-[300px] w-[257px] drop-shadow-lg"
            />
            <div id="price-compatibility" className="w-[258px] h-10 bg-black">
              <div id="price" className="text-[white] text-center pt-2">
                {categories[currentGame].price === 0
                  ? "Free to Play"
                  : `$${categories[currentGame].price}`}
              </div>
              <div id="compatibility"></div>
            </div>
          </div>
          <div
            id="game-content"
            style={{
              background: "rgba(0,0,0,.3098039216)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div
              id="game-title"
              className="text-white text-4xl font-bold px-4 tracking-wider"
            >
              {categories[currentGame].title}
            </div>
            <div id="tags" className="text-slate-300 px-4 my-1">
              {categories[currentGame].tags.map((tag) => {
                return (
                  <span
                    key={tag}
                    className="mr-2 text-[#57cbde] bg-[black] rounded-sm mx-[1px] px-[2px] p-[1px]"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
            ;
            <div id="description" className="text-slate-300 p-4">
              {categories[currentGame].description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
