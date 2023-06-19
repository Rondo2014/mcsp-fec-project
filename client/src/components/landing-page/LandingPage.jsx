import StoreNavBar from "./StoreNavBar";
import Sidebar from "./Sidebar";
import LPCarousel from "./LPCarousel";
import HomeHardware from "./HomeHardware";
import LoginBar from "./LoginBar";
import Special from "./Special";
import CategoryCarousel from "./CategoryCarousel";
import LoginCard from "./LoginCard";
import BrowseSteam from "./BrowseSteam";
import BrowseList from "./BrowseList";
import api from "../../api/axios.js";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await api.get("/api/games");
        setAllGames(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getGames();
  }, []);

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
      <BrowseList allGames={allGames} />
      <LoginBar />
    </div>
  );
};

export default LandingPage;
