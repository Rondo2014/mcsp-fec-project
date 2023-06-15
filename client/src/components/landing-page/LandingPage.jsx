import StoreNavBar from "./StoreNavBar";
import LPCarousel from "./LPCarousel"

const LandingPage = () => {
  return (
    <div className=" min-w-[972px] relative overflow-hidden">
      <StoreNavBar />
      <LPCarousel />
    </div>
  );
};

export default LandingPage;
