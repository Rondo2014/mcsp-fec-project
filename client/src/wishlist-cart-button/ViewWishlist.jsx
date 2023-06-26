import { useState, useEffect } from "react";
import api from "../api/axios.js";
import { useNavigate } from "react-router-dom";

const ViewWishlist = ({ wishlistLength }) => {
  const navigate = useNavigate();
  console.log(wishlistLength);
  const wishlistClickHandler = () => {
    if (wishlistLength === 0) {
      return;
    }
    navigate("/wishlist");
  };

  return (
    <div
      id="wishlist-button"
      className="w-[118px] h-[20px] px-[25px] pt-[3px] bg-[#749da7] text-white text-[11px] uppercase text-center mr-[1px] hover:bg-[#DCDEDF]  cursor-pointer] hover:text-[black] cursor-pointer"
      onClick={wishlistClickHandler}
    >
      Wishlist({wishlistLength !== 0 ? wishlistLength : 0})
    </div>
  );
};

export default ViewWishlist;
