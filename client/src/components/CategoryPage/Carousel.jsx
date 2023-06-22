import React, { useState, useEffect } from "react";
import api from "../../api/axios.js";
import { useNavigate } from "react-router-dom";

function Carousel() {

  return (
    <div id="carousel-container" className="static">
      <div id="left-arrow" className="absolute left-[400px] top-[410px] mb-5 bg-cover flex-grow h-full flex items-center justify-center" style={{
            background:
              "linear-gradient( to right, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
              height: "200px",
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
          <div id="right-arrow" className="absolute right-[410px] top-[410px] mb-5 bg-cover flex-grow h-full flex items-center justify-center" 
          style={{
            background:
            "linear-gradient( to left, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
            height: "200px",
            width: "50px"
          }}>
           <div
              style={{
                backgroundImage:
                  "url(https://store.cloudflare.steamstatic.com/public/images/v6/arrows.png)",
              }}
              className="w-[23px] h-9 transform"
            ></div>
        </div>
      <div className="absolute top-[320px] left-[480px] z-10">
        <div id="carousel" className="h-[400px] w-[940px]">
          <div id="game-image" className="drop-shadow-lg"
          style={{
            background: "rgba(0,0,0,.3098039216)",
            backdropFilter: "blur(20px)"
          }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg"
            className="object-left object-none h-90 w-70 drop-shadow-lg"/>
            <div id="price-compatibility" className="w-[258px] h-10 bg-black">
              <div id="price">
              </div>
              <div id="compatibility">
              </div>
            </div>
          </div>
          <div id="game-content" className="
        absolute top-[10px] left-[280px]">
            <div id="game-title" className="text-white text-4xl font-bold">Game Title</div>
            <div id="tags" className="text-slate-300">Tags</div>
            <div id="description" className="text-slate-300">Description</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
