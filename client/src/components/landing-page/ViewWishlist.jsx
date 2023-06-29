import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import WishlistContext from "../context/WishlistProvider.jsx";

const ViewWishlist = () => {
  const { wishlistLength, setWishlistLength, getWishlist } =
    useContext(WishlistContext);

  useEffect(() => {
    getWishlist();
  }, [wishlistLength]);

  const navigate = useNavigate();

  const wishlistClickHandler = () => {
    if (wishlistLength === 0) {
      return;
    }
    navigate("/wishlist");
  };

  return (
    <div
      id="wishlist-button"
      className="w-[118px] h-[20px] px-[25px] pt-[3px] bg-[#93b3c8] text-white text-[11px] uppercase text-center mr-[1px] hover:bg-[#DCDEDF]  cursor-pointer] hover:text-[black] cursor-pointer"
      onClick={wishlistClickHandler}
    >
      Wishlist({wishlistLength})
    </div>
  );
};

export default ViewWishlist;
