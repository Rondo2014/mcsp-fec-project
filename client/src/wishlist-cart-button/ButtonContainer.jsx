import { useContext, useEffect, useState } from "react";
import ViewCart from "./ViewCart";
import ViewWishlist from "./ViewWishlist";
import AuthProvider from "../components/context/AuthProvider";

const ButtonContainer = ({ wishlistLength }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { auth } = useContext(AuthProvider);
  useEffect(() => {
    if (localStorage.getItem("username") != null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  return (
    <>
      {" "}
      {loggedIn && (
        <div className="max-w-[940px] min-w-[940px] mx-auto bg-black relative">
          <div id="wishlist-top-button" className="absolute right-0 top-2">
            <div className="flex flex-row">
              <ViewWishlist wishlistLength={wishlistLength} />
              <ViewCart />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonContainer;
