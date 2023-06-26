import React, { useState, useEffect, useRef, useContext } from "react";
import WishlistButton from "./WishlistButton";
import AuthProvider from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProductCarousel = ({ game }) => {
  const [carouselData, setCarouselData] = useState([]);
  const [mainDisplay, setMainDisplay] = useState(0);
  const [handlePosition, setHandlePosition] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastSlide, setLastSlide] = useState(false);
  const { auth } = useContext(AuthProvider);
  const navigate = useNavigate();

  useEffect(() => {
    auth.token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [auth]);

  useEffect(() => {
    const images = game.images.map((image) => ({
      url: image,
      type: "image",
    }));

    const videos = game.videos.map((video) => ({
      url: video,
      type: "video",
    }));

    setCarouselData([...videos, ...images]);
  }, [game, auth.username]);

  const handleLeftClick = () => {
    const newIndex =
      (mainDisplay - 1 + carouselData.length) % carouselData.length;
    setMainDisplay(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
    setHandlePosition((newIndex / (carouselData.length - 1)) * 90);
    carouselData.length - 1 === newIndex || carouselData.length - 2 === newIndex
      ? setLastSlide(true)
      : setLastSlide(false);
  };

  const handleRightClick = () => {
    const newIndex =
      (mainDisplay + 1 + carouselData.length) % carouselData.length;
    setMainDisplay((prevIndex) => (prevIndex + 1) % carouselData.length);
    setHandlePosition((newIndex / (carouselData.length - 1)) * 90);
    carouselData.length - 1 === newIndex || carouselData.length - 2 === newIndex
      ? setLastSlide(true)
      : setLastSlide(false);
  };

  const handleMiniClick = (index) => {
    setMainDisplay(index);
    setHandlePosition((index / (carouselData.length - 1)) * 90);
    carouselData.length - 1 === index || carouselData.length - 2 === index
      ? setLastSlide(true)
      : setLastSlide(false);
  };

  const handleQueueClick = () => {
    navigate(`/product/${Math.ceil(Math.random() * 24)}`);
    location.reload();
  };

  console.log(lastSlide);

  return (
    <div className="w-[940px] mx-auto mb-[100px]">
      <div
        id="bg-glow"
        style={{
          backgroundImage:
            "url(https://store.cloudflare.steamstatic.com/public/images/v6/app/game_page_background_shadow.png?v=2)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="pb-[1px] mx-auto h-[450px]"
      >
        <div
          id="game-content"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0) 50%,rgba(0,0,0,0.4) 100%)",
          }}
        >
          <div id="right-col" className="w-[324px] ml-0 float-right">
            <div id="glance_ctn" className="p-0">
              <div id="game-image" className="mb-[7px]">
                <img src={game.game_image} className="w-[324px] h-[151px]" />
              </div>
              <div
                id="game-description"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: "6",
                  WebkitBoxOrient: "vertical",
                }}
                className="max-h-[111px] text-[13px] leading-[18px] pr-4 text-[#c6d4df]"
              >
                {game.description}
              </div>
              <div id="game-details">
                <div
                  id="release date"
                  className="flex leading-4 pt-[9px] pb-[13px]"
                >
                  <div
                    id="subtitle"
                    className="overflow-hidden whitespace-nowrap text-ellipsis text-[#556772] uppercase text-[10px] pr-[10px] min-w-[94px]"
                  >
                    Release Date:
                  </div>
                  <div
                    id="date"
                    className="max-h-[30px] overflow-hidden text-[#8f98a0] leading-4"
                  >
                    {game.pub_date}
                  </div>
                </div>
                <div id="developer" className="flex leading-4">
                  <div
                    id="subtitle-dev"
                    className="overflow-hidden whitespace-nowrap text-ellipsis text-[#556772] uppercase text-[10px] pr-[10px] min-w-[94px]"
                  >
                    Developer:
                  </div>
                  <div id="dev" className="text-[#67c1f5]">
                    {game.developer}
                  </div>
                </div>
                <div id="publisher" className="flex leading-4">
                  <div
                    id="subtitle-pub"
                    className="overflow-hidden whitespace-nowrap text-ellipsis text-[#556772] uppercase text-[10px] pr-[10px] min-w-[94px]"
                  >
                    Publisher
                  </div>
                  <div id="pub" className="text-[#67c1f5]">
                    {game.publisher}
                  </div>
                </div>
              </div>
              <div id="tags">
                <div className="mt-[10px] text-[11px]">
                  <div className="leading-[19px] text-[12px] text-[#556772]">
                    Popular user-defined tags for this product:
                  </div>
                  <div className=" whitespace-nowrap h-[22px] text-[11px]">
                    {game.tags.map((tag, index) => (
                      <a
                        className="text-[#67c1f5] bg-[#67c1f533] inline-block leading-[19px] px-[7px] mr-[2px] rounded-sm cursor-pointer mb-[3px] max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis"
                        key={tag + index}
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="left-col" className="w-[616px] float-left">
            <div className="overflow-hidden mr-4 relative">
              <div id="player" className="bg-black overflow-hidden relative">
                <div id="spacer"></div>
                {carouselData[mainDisplay] && (
                  <div>
                    {carouselData[mainDisplay].type === "image" && (
                      <img
                        src={carouselData[mainDisplay].url}
                        alt="Carousel Image"
                        className="w-full h-full"
                      />
                    )}
                    {carouselData[mainDisplay].type === "video" && (
                      <video
                        src={carouselData[mainDisplay].url}
                        controls
                        className="w-full h-full"
                        autoPlay
                        muted
                      />
                    )}
                  </div>
                )}
              </div>
              <div
                id="highlight-strip"
                className="mt-[4px] relative h-[69px] mb-1 overflow-x-hidden overflow-y-hidden z-40 w-auto"
              >
                <div
                  className={`w-[1940px] left-0 absolute overflow-clip  ${
                    lastSlide ? "-translate-x-32" : "translate-x-0"
                  } duration-300 transition-all`}
                >
                  {carouselData.map((item, index) => (
                    <div
                      className={`float-left h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative ${
                        index === mainDisplay &&
                        "shadow-lg shadow-[#67c1f5] border-[1px] border=[#67c1f5]"
                      }`}
                      key={item + index}
                      onClick={() => handleMiniClick(index)}
                    >
                      {item.type === "image" ? (
                        <img src={item.url} />
                      ) : (
                        <>
                          <img
                            className="brightness-75"
                            src={game.game_image}
                          />
                          <div
                            id="marker"
                            className="absolute top-4 left-[42px] w-[32px] h-[32px] bg-[url(https://store.cloudflare.steamstatic.com/public/images/v5/ico_game_highlight_video.png)]"
                          ></div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div id="slider" className="relative h-[25px]">
                <div
                  id="slider-left"
                  className="absolute w-[38px] top-0 bottom-0 rounded-[3px] cursor-pointer bg-[#233c5166]"
                  onClick={() => handleLeftClick()}
                >
                  <span
                    className="inline-block w-[9px] h-[7px] ml-[13px] mt-[5px]"
                    style={{
                      backgroundImage:
                        "url(https://store.cloudflare.steamstatic.com/public/images//v6/icon_cluster_controls.png)",
                      backgroundPosition: "-18px 0px",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></span>
                </div>
                <div
                  id="slider-bar"
                  className="absolute left-[39px] right-[39px] top-0 bottom-0 bg-[#233c5166] rounded-[3px]"
                >
                  <div
                    id="handle"
                    style={{
                      background:
                        "linear-gradient(135deg, #3d6c8d 0%,#2e5470 100%)",
                      left: `${handlePosition}%`,
                    }}
                    className={`relative w-[60px] cursor-pointer h-[25px] z-50 rounded-[3px]`}
                  ></div>
                </div>
                <div
                  id="slider-right"
                  className="absolute w-[38px] top-0 bottom-0 rounded-[3px] cursor-pointer bg-[#233c5166] right-0 "
                  onClick={() => handleRightClick()}
                >
                  <span
                    className="inline-block w-[9px] h-[7px] ml-[13px] mt-[5px] transform rotate-180"
                    style={{
                      backgroundImage:
                        "url(https://store.cloudflare.steamstatic.com/public/images//v6/icon_cluster_controls.png)",
                      backgroundPosition: "-18px 0px",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoggedIn ? (
        <>
          <div className="absolute top-[739.5px] w-[940px] h-[64px] p-[16px] bg-[rgba(0,0,0,0.2)]">
            <div className="flex">
              <div className="flex flex-row">
                <WishlistButton gameId={game.id} />
                <div className="w-[73px] h-[30px] mr-[3px] bg-[#67c1f533] text-[#67c1f5] px-[15px] text-[15px] pt-[3px] rounded-sm cursor-pointer hover:bg-[#66C0F4] hover:text-white">
                  Follow
                </div>
                <div className="w-[72px] h-[30px] bg-[#67c1f533] text-[#67c1f5] px-[15px] text-[15px] pt-[3px] rounded-sm cursor-pointer hover:bg-[#66C0F4] hover:text-white">
                  Ignore
                </div>
              </div>
            </div>
            <div className="relative">
              {" "}
              <div
                className="absolute right-0 top-[-30px] w-[174px] h-[30px] bg-[#67c1f533] text-[#67c1f5] px-[15px] text-[15px] pt-[3px] rounded-sm cursor-pointer hover:bg-[#66C0F4] hover:text-white"
                onClick={handleQueueClick}
              >
                View Your Queue {`=>`}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="absolute top-[739.5px] w-[940px] h-[46px] p-[16px] bg-[rgba(0,0,0,0.2)]">
          <div className="text-[#c6d4df] text-[12px] relative top-[-5px]">
            <span
              className="text-white hover:text-[#66C0F4] cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign in
            </span>{" "}
            to add this item to your wishlist, follow it, or mark it as ignored
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
