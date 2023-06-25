import { useState, useEffect, useContext } from "react";
import api from "../../api/axios.js";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider.jsx";

const ViewWishlist = () => {
  const [wishlistLength, setWishlistLength] = useState([]);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [auth]);

  useEffect(() => {
    getWishlist();
  }, []);

  const getWishlist = async () => {
    try {
      const data = await api.get("/api/wishlist", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (data.data.message) {
        return setWishlistLength(0);
      }
      setWishlistLength(data.data.length);
    } catch (error) {
      console.error(error);
      if (error.response.data.error) {
        setErr(error?.response?.data?.error);
      }
    }
  };

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
      Wishlist({wishlistLength != null ? wishlistLength : 0})
    </div>
  );
};

export default ViewWishlist;
