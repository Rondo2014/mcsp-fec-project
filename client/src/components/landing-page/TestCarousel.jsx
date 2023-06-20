import React, { useState, useEffect } from "react";
import api from "../../api/axios.js";

const TestCarousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [bigImage, setBigImage] = useState([]);
  const [miniPics, setMiniPics] = useState([]);
  const [title, setTitle] = useState([]);
  const [carouselSlide, setCarouselSlide] = useState(0);

  const handleNext = () => {
    setCarouselSlide((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCarouselSlide(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("/api/games/recommended");
        const data = response.data;
        const minipics = data.map((images) => {
          return images.images.slice(0, 4);
        });
        const bigImg = data.map((img) => {
          return img.game_image;
        });
        const gameTitle = data.map((title) => {
          return title.title;
        });

        setCarouselData(data);
        setBigImage(bigImg);
        setMiniPics(minipics);
        setTitle(gameTitle);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselSlide((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselData.length]);

  return (
    carouselData.length > 0 && (
      <>
        <div className=" h-[353px] w-[940px] mx-auto">
          <div className="pb-2 text-white font-semibold">
            FEATURED & RECOMMENDED
          </div>
          <div
            className=" h-full "
            style={{
              boxShadow: "3px 2px 7px rgba(0, 0, 0, .8)",
            }}
          >
            <div className=" flex flex-cols carousel  h-full ">
              <img
                src={bigImage[carouselSlide]}
                alt={`Image ${carouselSlide + 1}`}
                className="my-auto w-[600px] h-full drop-shadow-lg z-10"
                style={{
                  boxShadow: "8px 0px 5px rgba(0, 0, 0, .8)",
                }}
              />
              <div
                id="arrow-left"
                className="left-[-28px] absolute top-[13%] w-auto h-auto py-9 px-[11px] cursor-pointer"
                style={{
                  background:
                    "linear-gradient( to right, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
                  backgroundSize: "cover",
                }}
                onClick={handlePrev}
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
                className="right-[-28px] absolute top-[13%] w-auto h-auto py-9 px-[11px] cursor-pointer"
                style={{
                  background:
                    "linear-gradient( to left, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
                  backgroundSize: "cover",
                }}
                onClick={handleNext}
              >
                <div
                  style={{
                    backgroundImage:
                      "url(https://store.cloudflare.steamstatic.com/public/images/v6/arrows.png)",
                  }}
                  className="w-[23px] h-9"
                ></div>
              </div>

              <div
                className="relative bg-gray-950"
                style={{
                  backgroundImage:
                    'url("https://store.cloudflare.steamstatic.com/public/images/v6/home/background_maincap_2.jpg")',
                }}
              >
                <div className="absolute left-4 top-8 text-[28px] text-white font-normal tracking-wide overflow-clip my-[-15px]">
                  {title[carouselSlide]}
                </div>
                <div className="flex flex-wrap h-full">
                  <div className="w-1/2 self-end pb-3 pr-3">
                    <img
                      src={miniPics[carouselSlide][0]}
                      alt={`MiniPic ${carouselSlide}`}
                      className="h-[69px] w-[162px] hover:brightness-125 cursor-pointer"
                    />
                  </div>
                  <div className="w-1/2 self-end pb-3">
                    <img
                      src={miniPics[carouselSlide][1]}
                      alt={`MiniPic ${carouselSlide}`}
                      className="h-[69px] w-[162px] hover:brightness-125 cursor-pointer"
                    />
                  </div>
                  <div className="w-1/2 pr-3">
                    <img
                      src={miniPics[carouselSlide][2]}
                      alt={`MiniPic ${carouselSlide}`}
                      className="h-[69px] w-[162px] hover:brightness-125 cursor-pointer"
                    />
                  </div>
                  <div className="w-1/2">
                    <img
                      src={miniPics[carouselSlide][3]}
                      alt={`MiniPic ${carouselSlide}`}
                      className="h-[69px] w-[162px] hover:brightness-125 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="carousel-thumbs" className="text-center min-h-[37px] pb-1">
            {carouselData.map((item, index) => {
              return (
                <div
                  className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                  key={"thumb" + item.id}
                  onClick={() => setCarouselSlide(index)}
                  style={{
                    backgroundColor:
                      index === carouselSlide
                        ? "hsla(202,60%,100%,0.4)"
                        : "hsla(202,60%,100%,0.2)",
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </>
    )
  );
};

export default TestCarousel;
