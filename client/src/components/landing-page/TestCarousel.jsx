import React, { useState, useEffect } from "react";
import api from "../../api/axios.js";

const TestCarousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [bigImage, setBigImage] = useState([]);
  const [miniPics, setMiniPics] = useState([]);
  const [title, setTitle] = useState([]);
  const [carouselSlide, setCarouselSlide] = useState(0);
  const [carouselHover, setCarouselHover] = useState(false);
  const [miniHover, setMiniHover] = useState(null);
  const [gamePrice, setGamePrice] = useState([]);
  const [hasSale, setHasSale] = useState(false);
  const [gameSale, setGameSale] = useState([]);

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
        console.log(data);
        const minipics = data.map((images) => {
          return images.images.slice(0, 4);
        });
        const bigImg = data.map((img) => {
          return img.game_image;
        });
        const gameTitle = data.map((title) => {
          return title.title;
        });
        const gamePrices = data.map((price) => {
          return price.price;
        });

        const hasSale = data.map((on_sale) => {
          return on_sale.on_sale;
        });
        const gameSale = data.map((sale_deal) => {
          return sale_deal.sale_deal;
        });

        setGameSale(gameSale);
        setHasSale(hasSale);
        setGamePrice(gamePrices);
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
    if (!carouselHover) {
      const interval = setInterval(() => {
        setCarouselSlide((prevIndex) => (prevIndex + 1) % carouselData.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [carouselHover, carouselData.length]);

  return (
    carouselData.length > 0 && (
      <>
        <div className="h-[353px] w-[940px] mx-auto">
          <div className="pb-2 text-white font-semibold">
            FEATURED & RECOMMENDED
          </div>
          <div
            className="h-full cursor-pointer"
            style={{
              boxShadow: "3px 2px 7px rgba(0, 0, 0, .8)",
            }}
            onMouseEnter={() => setCarouselHover(true)}
            onMouseLeave={() => setCarouselHover(false)}
          >
            <div className="flex flex-cols carousel h-full transition duration-300 ease-in-out">
              <img
                src={
                  miniHover === null
                    ? bigImage[carouselSlide]
                    : miniPics[carouselSlide][miniHover]
                }
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
                <div className="absolute left-4 top-8 text-[28px] text-white font-normal tracking-wide overflow-clip my-[-30px]">
                  {title[carouselSlide]}
                </div>
                <div className="grid grid-cols-2 items-center mt-[90px]">
                  {miniPics[carouselSlide].map((miniPic, index) => (
                    <div
                      className="w-full px-2 py-3"
                      key={`miniPic-${index}`}
                      onMouseEnter={() => setMiniHover(index)}
                      onMouseLeave={() => setMiniHover(null)}
                    >
                      <img
                        src={miniPic}
                        alt={`MiniPic ${carouselSlide}`}
                        className="h-[69px] w-[162px] hover:brightness-125 cursor-pointer mt-[-13px] mr-[-10px]"
                      />
                    </div>
                  ))}
                  <div className="mt-[8px] pl-[6px] inline-block w-[298px]">
                    <div className="text-[21px] font-extralight min-h-auto pr-[10px] pt-[6px] leading-[18px] text-[#fff] ml-4">
                      Now Available
                    </div>
                  </div>
                  {!hasSale[carouselSlide] ? (
                    <div className="absolute b-[10px] left-[20px] leading-[15px] bottom-3 flex">
                      <div className="p-0 flex items-center flex-row flex-shrink justify-end">
                        <div className="px-[6px] text-white text-[11px] leading-3 cursor-pointer">
                          {gamePrice[carouselSlide] !== 0
                            ? "$" + gamePrice[carouselSlide]
                            : "Free to play"}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute b-[10px] left-[20px] leading-[15px] bottom-3 flex">
                      <div className="p-0 flex items-center flex-row flex-shrink justify-end">
                        <div className="px-[6px] text-[#738895] text-[11px] leading-3 cursor-pointer">
                          <div
                            className="left-0 right-0 absolute top-[43%] border-b-[#738895]"
                            style={{
                              transform: "skewY(-8deg)",
                              boxShadow: "0 0 2px black",
                            }}
                          >
                            {" "}
                          </div>
                          $
                          {gamePrice[carouselSlide] -
                            gameSale[carouselSlide] *
                              (gamePrice[carouselSlide] / 100)}
                        </div>
                      </div>
                      <div>${}</div>
                    </div>
                  )}
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
        </div>
      </>
    )
  );
};

export default TestCarousel;
