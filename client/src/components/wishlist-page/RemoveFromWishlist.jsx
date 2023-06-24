import { useParams } from "react-router-dom";
import api from "../../api/axios.js";
import AuthProvider from "../context/AuthProvider.jsx";
import { useContext } from "react";

const RemoveFromWishlist = ({ gameId }) => {
  const { auth } = useContext(AuthProvider);

  const removeHandler = async () => {
    try {
      const response = await api.post(
        `/api/remove/wishlist`,
        { gameId: gameId },
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <span className="hover:text-white cursor-pointer" onClick={removeHandler}>
      remove
    </span>
  );
};

export default RemoveFromWishlist;
