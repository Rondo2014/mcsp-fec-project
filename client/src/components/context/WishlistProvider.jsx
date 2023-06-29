import { createContext, useState, useEffect } from "react";
import api from "../../api/axios.js";
import AuthContext from "./AuthProvider.jsx";

const WishlistContext = createContext({});

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [err, setErr] = useState("");
  const [wishlistLength, setWishlistLength] = useState(0);

  const { isLoggedIn } = AuthContext;

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

  useEffect(() => {
    if (isLoggedIn) {
      getWishlist();
    }
  }, [wishlistLength]);
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        err,
        setErr,
        wishlistLength,
        setWishlistLength,
        getWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
