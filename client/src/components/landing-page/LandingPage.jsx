import StoreNavBar from "./StoreNavBar";
import Sidebar from "./Sidebar";
import TestCarousel from "./TestCarousel";
import HomeHardware from "./HomeHardware";
import LoginBar from "./LoginBar";
import Special from "./Special";
import CategoryCarousel from "./CategoryCarousel";
import LoginCard from "./LoginCard";
import BrowseSteam from "./BrowseSteam";
import BrowseList from "./BrowseList";
import { useState, useEffect, useContext } from "react";
import api from "../../api/axios";
import AuthContext from "../context/AuthProvider";

const LandingPage = ({ recentlyViewed }) => {
  const [allGames, setAllGames] = useState([]);
  const { auth } = useContext(AuthContext);

  const isLoggedIn = auth?.token;

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
        <Sidebar recentlyViewed={recentlyViewed} />
        <TestCarousel />
        <Special />
        <HomeHardware />
        <CategoryCarousel />
        {!isLoggedIn && <LoginCard />}
        <BrowseSteam />
      </div>
      <BrowseList allGames={allGames} />
      {!isLoggedIn && <LoginBar />}
    </div>
  );
};

export default LandingPage;
