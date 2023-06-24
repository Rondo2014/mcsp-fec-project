import { useState } from "react";
import api from "../../api/axios.js";
import { useNavigate } from "react-router-dom";

const WishlistButton = ({ gameId }) => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const addToWishlist = async () => {
    try {
      const response = await api.post(
        "/api/add/wishlist",
        { gameId: gameId },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response) {
        setErr("Game added to ");
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.error) {
        setErr(error?.response?.data?.error);
        setTimeout(() => {
          return navigate("/login");
        }, 3000);
      }
      if (error.response.data.message) {
        setErr(error?.response?.data?.message);
        setTimeout(() => {
          return setErr("");
        }, 3000);
      }
    }
  };

  return (
    <div>
      <div
        className="w-[162px] h-[30px] mr-[4px] bg-[#67c1f533] text-[#67c1f5] px-[15px] text-[15px] pt-[3px] rounded-sm cursor-pointer hover:bg-[#66C0F4] hover:text-white"
        onClick={addToWishlist}
      >
        Add to your wishlist
      </div>
      <div className="text-red-500 absolute top-5 right-[30%]">{`${err}`}</div>
    </div>
  );
};

export default WishlistButton;
