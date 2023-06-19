import StoreNavBar from "./StoreNavBar";
import Sidebar from "./Sidebar";
import LPCarousel from "./LPCarousel";
import HomeHardware from "./HomeHardware";
import LoginBar from "./LoginBar";
import Special from "./Special";
import CategoryCarousel from "./CategoryCarousel";
import LoginCard from "./LoginCard";

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
      </div>
      <LoginBar />
    </div>
  );
};

export default LandingPage;
