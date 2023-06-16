import Navbar from "./components/nav-footer/Navbar";
import Footer from "./components/nav-footer/Footer";
import LandingPage from "./components/landing-page/LandingPage";
import HomeHardware from "./components/landing-page/homeHardware";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <HomeHardware />
      <Footer />
    </div>
  );
}

export default App;
