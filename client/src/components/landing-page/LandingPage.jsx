import StoreNavBar from "./StoreNavBar";
import Sidebar from "./Sidebar";

const LandingPage = () => {
  return (
    <div className="w-full">
      <div className=" w-[972px] relative mx-auto">
        <StoreNavBar />
        <Sidebar />
      </div>
    </div>
  );
};

export default LandingPage;
