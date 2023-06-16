import StoreNavBar from "./StoreNavBar";
import Sidebar from "./Sidebar";
import LPCarousel from "./LPCarousel";
import HomeHardware from "./HomeHardware";
import LoginBar from "./LoginBar";

const LandingPage = () => {
  return (
    <div className="w-full">
      <div className=" w-[972px] relative mx-auto">
        <StoreNavBar />
        <Sidebar />
        <LPCarousel />
        <HomeHardware />
      </div>
      <LoginBar />
    </div>
  );
};

export default LandingPage;
