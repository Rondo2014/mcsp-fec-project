import Navbar from "./components/nav-footer/Navbar";
import Footer from "./components/nav-footer/Footer";
import ProductPage from "./components/product-page/ProductPage";
import LandingPage from "./components/landing-page/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
