import Navbar from "./components/nav-footer/Navbar";
import Footer from "./components/nav-footer/Footer";
import ProductPage from "./components/product-page/ProductPage";
import LandingPage from "./components/landing-page/LandingPage";
import Login from "./components/user/login/Login";
import Signup from "./components/user/signup/Signup";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Wishlist from "./components/wishlist-page/wishlist";
import CategoryPage from "./components/CategoryPage/CategoryPage";

function App() {
  const storedRecentlyViewed = sessionStorage.getItem("recentlyViewed");
  const initialRecentlyViewed = storedRecentlyViewed
    ? JSON.parse(storedRecentlyViewed)
    : [];
  const [recentlyViewed, setRecentlyViewed] = useState(initialRecentlyViewed);

  useEffect(() => {
    sessionStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  return (
    <div className="min-h-screen">
      <Navbar />
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
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
