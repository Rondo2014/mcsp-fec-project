import Navbar from "./components/nav-footer/Navbar";
import Footer from "./components/nav-footer/Footer";
import ProductPage from "./components/product-page/ProductPage";
import LandingPage from "./components/landing-page/LandingPage";
import Login from "./components/user/login/Login";
import Signup from "./components/user/signup/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
