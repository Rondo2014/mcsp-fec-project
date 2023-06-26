import Navbar from "./components/nav-footer/Navbar";
import Footer from "./components/nav-footer/Footer";
import ProductPage from "./components/product-page/ProductPage";
import LandingPage from "./components/landing-page/LandingPage";
import Login from "./components/user/login/Login";
import Signup from "./components/user/signup/Signup";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Wishlist from "./components/wishlist-page/Wishlist";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import ButtonContainer from "./wishlist-cart-button/ButtonContainer";
import api from "./api/axios.js";

function App() {
  const [wishlistLength, setWishlistLength] = useState(0);
  const storedRecentlyViewed = sessionStorage.getItem("recentlyViewed");
  const navigate = useNavigate();

  const initialRecentlyViewed = storedRecentlyViewed
    ? JSON.parse(storedRecentlyViewed)
    : [];
  const [recentlyViewed, setRecentlyViewed] = useState(initialRecentlyViewed);

  useEffect(() => {
    sessionStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  useEffect(() => {
    const currentUser =
      localStorage.getItem("token") !== "undefined"
        ? localStorage.getItem("token")
        : localStorage.clear();

    if (
      (!currentUser && window.location.pathname === "/wishlist") ||
      window.location.pathname === "/signup"
    ) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      const getWishlist = async () => {
        try {
          const data = await api.get("/api/wishlist", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          console.log(data.data.length);
          if (data.data.message) {
            return setWishlistLength(0);
          }
          setWishlistLength(data.data.length);
        } catch (error) {
          console.log(error);
        }
      };
      getWishlist();
    }
  }, []);

  return (
    <div className="">
      <Navbar />
      <ButtonContainer wishlistLength={wishlistLength} />
      <Routes>
        <Route
          path="/"
          element={<LandingPage recentlyViewed={recentlyViewed} />}
        />
        <Route
          path="/product/:id"
          element={
            <ProductPage
              recentlyViewed={recentlyViewed}
              setRecentlyViewed={setRecentlyViewed}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
