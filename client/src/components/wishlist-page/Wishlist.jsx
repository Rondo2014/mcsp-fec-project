import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios.js";
import WishlistRow from "./WishlistRow.jsx";
import WishlistContext from "../context/WishlistProvider.jsx";

const Wishlist = () => {
  const [game, setGame] = useState([]);

  const { wishlistLength } = useContext(WishlistContext);

  console.log(game);
  const navigate = useNavigate();

  useEffect(() => {
    getGame();
  }, [wishlistLength]);

  const getGame = async () => {
    try {
      const data = await api.get("/api/wishlist", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setGame(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
      if (error) {
        setErr(error?.response?.data?.error);
        setTimeout(() => {
          return navigate("/login");
        }, 3000);
      }
    }
  };

  return (
    <>
      <div className="bg-[#202326] bg-cover h-screen">
        <div className=" mx-auto max-w-[940px] container pt-8">
          <div className="mb-3">
            <div className="flex flex-row mb-5">
              <img
                src={localStorage.getItem("profile_picture")}
                className="w-[67px] h-[67px] "
              />
              <h2 className="p-4 text-white text-[26px] capitalize">
                {localStorage.getItem("username")
                  ? `${localStorage
                      .getItem("username")
                      .toUpperCase()}'S WISHLIST`
                  : `Sign In to View Wishlist`}
              </h2>
            </div>
            <div className=" flex flex-row">
              <input
                type="text"
                placeholder="Search by name or tag"
                className="min-w-[556px] h-[38px] px-[10px] py-[7px] bg-[rgba(0,0,0,0.1)]  border-black border-[1px] rounded-[4px]"
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
        {game.length > 0 && <WishlistRow game={game} />}
      </div>
    </>
  );
};

export default Wishlist;
