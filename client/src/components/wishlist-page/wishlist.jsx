import React, { useState, useEffect } from "react";
import api from "../../api/axios.js";

const Wishlist = () => {
  const [game, setGame] = useState([]);
  useEffect(() => {
    const getGame = async () => {
      const data = await api.get("/api/wishlist", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setGame(data.data);
      console.log(data.data);
    };
    getGame();
  }, []);
  const WishlistRow = ({ item }) => {
    return (
      <div className="wishlist-row flex-col max-w-[940px] mx-auto relative bg-gray-700 bg-opacity-90 text-gray-500 px-6 py-4 mb-2 h-[171px] w-full shadow-md transition-colors duration-300">
        <div className="flex items-center mb-4">
          <div className="w-60 h-50 flex-shrink-0 overflow-hidden relative">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-4 flex flex-col justify-between">
            <div>
              <h2 className="text-white text-lg font-normal absolute top-2">
                {item.title}
              </h2>
              <div className=" text-[11px] absolute left-[240px] top-[65px]">
                <p className="text-white relative left-10">
                  OVERALL REVIEWS:{" "}
                  <span className="ml-[1px] text-[#66C0F4]">
                    {item.reviews.length === 0
                      ? "NO USER REVIEWS"
                      : item.reviews.length}
                  </span>
                </p>
              </div>
              <div className="text-[11px] absolute left-[240px] ">
                <p className="text-white relative left-10">
                  RELEASE DATE:{" "}
                  {item.releaseDate ? item.releaseDate : "TO BE ANNOUNCED"}
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="text-white font-semibold py-2 px-4 rounded absolute right-1 top-14">
                {item.price !== 0 ? `$${item.price}` : "Coming Soon"}
              </button>
            </div>
          </div>
          <div className="absolute bottom-4 right-6">
            <div className="flex flex-row min-w-[640px]">
              <div className=" left-0">
                <p className="text-gray-600 text-[11px] px-[5px] py-[2px] ">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block mr-[4px] border border-white border-opacity-20 text-gray-500 text-[12px] rounded cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
              <div className="items-right text-right text-[11px] right-[-20px] absolute bottom-0">
                <p className="text-[#b2b8bd] text-right">
                  Added on 6/15/2023 ( remove )
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-white absolute bottom-0 padding left-3">
          {item.rank}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-[#202326]">
      <div className=" mx-auto max-w-[940px] container pt-8">
        <div className="mb-6">
          <div className="flex flex-row">
            <img
              src="https://avatars.akamai.steamstatic.com/28b250a5ab104042a7e55c79069bb1af3f820eae_full.jpg"
              className="w-[67px] h-[67px]"
            />
            <h2 className="p-4 text-white text-[26px]">
              {localStorage.getItem("username")} Wishlist
            </h2>
          </div>
          <div className=" flex flex-row">
            <input
              type="text"
              placeholder="Search by name or tag"
              className="min-w-[556px] h-[38px] px-[10px] py-[7px] bg-[rgba(0,0,0,0.1)]  border-black border-[1px] rounded-sm"
            />
            <div className="w-full pl-[20px] text-white">
              <div className="flex flex-row">
                <div className="w-[115px] h-[38px] pl-[14px] pr-[10px] py-[8px] hover:bg-[rgba(255,255,255,0.1)] flex">
                  Options
                  <img
                    src="https://store.akamai.steamstatic.com/public/images/v6/btn_arrow_down_padded_white.png"
                    className="h-[12px] w-[19px] mt-[6px] ml-[3px]"
                  />
                </div>
                <div className="min-w-[203px] h-[38px] pl-[14px] pr-[10px] py-[8px] hover:bg-[rgba(255,255,255,0.1)] flex">
                  <span className="mr-[5px] text-[#9099a1]">Sort By:</span>
                  Your Rank
                  <img
                    src="https://store.akamai.steamstatic.com/public/images/v6/btn_arrow_down_padded_white.png"
                    className="h-[12px] w-[19px] mt-[6px] ml-[3px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
