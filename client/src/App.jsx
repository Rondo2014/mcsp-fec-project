import HpCarousel from "./components/landing-page/carousel";
import Navbar from "./components/nav-footer/Navbar";
import Footer from "./components/nav-footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{/* Your app content */}</div>
      <HpCarousel />
      <Footer />
    </div>
  );
}

export default App;
