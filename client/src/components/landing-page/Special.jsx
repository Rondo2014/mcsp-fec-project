import { SPECIAL_CAROUSEL_DATA } from "./utils";
import { useState } from "react";

const Special = () => {
  const [activeCarousel, setActiveCarousel] = useState(1);

  const handleAddCarousel = () => {
    if (activeCarousel < 4) {
      setActiveCarousel((prev) => prev + 1);
    } else {
      setActiveCarousel(1);
    }
  };

  const handleMinusCarousel = () => {
    if (activeCarousel > 1) {
      setActiveCarousel(activeCarousel - 1);
    } else {
      setActiveCarousel(4);
    }
  };
  console.log(activeCarousel);
  return (
    <div className="py-[20px] px-[2%]">
      <div id="special offers" className="mb-[20px] relative z-auto">
        <h2
          id="title"
          className="text-[14px] uppercase text-white mb-[10px] pt-[2px] font-semibold tracking-wider"
        >
          Special Offers
          <span className="float-right inline-block relative top-[-3px] font-[400] tracking-normal border-[1px] border-white px-5">
            <a
              className="rounded-sm p-[1px] inline-block cursor-pointer text0white bg-transparent"
              href="https://store.steampowered.com/specials?snr=1_4_4_#tab=TopSellers"
            >
              <span>Browse More</span>
            </a>
          </span>
        </h2>
        <div id="carousel-container" className="relative">
          <div id="carousel-items" className="h-[390px] relative clear-both">
            {SPECIAL_CAROUSEL_DATA.map((item, index) => {
              if (item.id === activeCarousel) {
                return (
                  <div
                    id="special-offers-group"
                    className="flex transition duration-[400ms]"
                    key={item.id}
                  >
                    {item.items.map((item, index) => {
                      return (
                        <div
                          style={{
                            backgroundImage:
                              "url(https://store.cloudflare.steamstatic.com/public/images/v6/spotlight_background.jpg?v=1)",
                          }}
                          className="mr-[11px] h-[390px] relative "
                          key={index}
                        >
                          <div className="pl-0 pt-0 w-[306px] overflow-hidden">
                            <a href={item.link}>
                              <img
                                className="overflow-clip"
                                src={item.content}
                                alt=""
                              />
                            </a>
                          </div>
                          <div
                            id="spotlight-content"
                            className="m-0 min-h-[23px] pt-2 pb-4 px-4 text-[#9099a1] text-[12px] absolute bottom-0 w-[306px]"
                            style={{
                              backgroundImage:
                                "url( https://store.cloudflare.steamstatic.com/public/images/v6/home/background_spotlight.jpg )",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          >
                            <h2 className="uppercase text-[14px] text-white mb-[10px] pt-[2px] tracking-wide block">
                              Weekend Deal
                            </h2>
                            <div
                              id="offer"
                              className="font-light text-[#acdbf5]"
                            >
                              {item.offer}
                            </div>
                            <div id="sale-amount" className="mt-[10px]">
                              <div
                                id="discount-block"
                                className="relative flex"
                              >
                                <div className="leading-[34px] px-[5px] text-[25px] font-bold text-[#BEEE11] bg-[#4c6b22] inline-block">
                                  {item.discount}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              }
            })}
            <div id="carousel-thumbs" className="text-center min-h-[37px] pb-1">
              <div
                className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                key={"thumb" + 1}
                onClick={() => setActiveCarousel(1)}
                style={{
                  backgroundColor:
                    1 === activeCarousel
                      ? "hsla(202,60%,100%,0.4)"
                      : "hsla(202,60%,100%,0.2)",
                }}
              ></div>
              <div
                className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                key={"thumb" + 2}
                onClick={() => setActiveCarousel(2)}
                style={{
                  backgroundColor:
                    2 === activeCarousel
                      ? "hsla(202,60%,100%,0.4)"
                      : "hsla(202,60%,100%,0.2)",
                }}
              ></div>
              <div
                className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                key={"thumb" + 3}
                onClick={() => setActiveCarousel(3)}
                style={{
                  backgroundColor:
                    3 === activeCarousel
                      ? "hsla(202,60%,100%,0.4)"
                      : "hsla(202,60%,100%,0.2)",
                }}
              ></div>
              <div
                className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                key={"thumb" + 4}
                onClick={() => setActiveCarousel(4)}
                style={{
                  backgroundColor:
                    4 === activeCarousel
                      ? "hsla(202,60%,100%,0.4)"
                      : "hsla(202,60%,100%,0.2)",
                }}
              ></div>
            </div>
            <div
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
              <div
                id="arrow-right"
                className="left-[986px] absolute top-[5%] w-auto h-auto py-9 px-[11px] cursor-pointer"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;