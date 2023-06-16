import Navbar from "./components/nav-footer/Navbar";
import Footer from "./components/nav-footer/Footer";
import LandingPage from "./components/landing-page/LandingPage";

function App() {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
