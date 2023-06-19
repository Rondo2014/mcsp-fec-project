import StoreNavBar from "./StoreNavBar";
import Sidebar from "./Sidebar";
import LPCarousel from "./LPCarousel";
import HomeHardware from "./HomeHardware";
import LoginBar from "./LoginBar";
import Special from "./Special";
import CategoryCarousel from "./CategoryCarousel";
import LoginCard from "./LoginCard";
import BrowseSteam from "./BrowseSteam";

const LandingPage = () => {
  return (
    <div className="w-full">
      <div className=" w-[972px] relative mx-auto">
        <StoreNavBar />
        <Sidebar />
        <LPCarousel />
        <Special />
        <HomeHardware />
        <CategoryCarousel />
        <LoginCard />
        <BrowseSteam />
      </div>
      <LoginBar />
    </div>
  );
};

export default LandingPage;
