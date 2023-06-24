import { useState, useEffect } from "react";
import api from "../../api/axios.js";
import { Link, useNavigate } from "react-router-dom";

const ViewWishlist = () => {
  const [game, setGame] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const getGame = async () => {
        const data = await api.get("/api/wishlist", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setGame(data.data);
        console.log(data.data);
      };
      getGame();
    } catch (error) {
      console.error(error);
      if (error.response.data.error) {
        setErr(error?.response?.data?.error);
        setTimeout(() => {
          return navigate("/login");
        }, 3000);
      }
    }
  }, []);
  return (
    <div
      id="wishlist-button"
      className="w-[118px] h-[20px] px-[25px] pt-[3px] bg-[#93b3c8] text-white text-[11px] uppercase text-center mr-[1px] hover:bg-[#DCDEDF]  cursor-pointer] hover:text-[black] cursor-pointer"
      onClick={() => navigate("/wishlist")}
    >
      Wishlist({game.length})
    </div>
  );
};

export default ViewWishlist;
