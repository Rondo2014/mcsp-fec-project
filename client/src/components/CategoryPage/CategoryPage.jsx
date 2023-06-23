import React, { useEffect, useState } from "react";
import StoreNavBar from "../landing-page/StoreNavBar";
import CategoryDiv from "./CategoryDiv";
import PopularTitles from "./PopularTitles";
import { useParams } from "react-router-dom";
import api from "../../api/axios";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [currentGame, setCurrentGame] = useState(0);
  const [loading, setLoading] = useState(true);
  const [transition, setTransition] = useState(false);
  //pass game state down to category div
  const { id } = useParams();
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await api.get(`/api/games/${id}`);
        setCategories(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="w-full bg-[black]">
      <StoreNavBar />
      <div
        className={`${
          transition ? "opacity-0" : "opacity-100"
        } transition-opacity duration-1000 ease-in-out`}
        style={{
          backgroundImage:
            "radial-gradient(farthest-side at 50% 40%, rgba(0, 0, 0, 0) 70%, black), linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 10%, black 1%, rgba(0, 0, 0, 0.5))",
          maskImage:
            "radial-gradient(ellipse at 50% 10%, black 1%, rgba(0, 0, 0, 0.5))",
        }}
      >
        <img
          src={categories[currentGame]?.game_image}
          className="max-w-[1500px] w-full mx-auto h-[800px] mix-blend-overlay"
          alt="Category Image"
        />
      </div>
      <div className=" max-w-[970px] mx-auto">
        {/* category div w/ bg image from game */}
        {loading ? (
          <div>loading...</div>
        ) : (
          <CategoryDiv
            transition={transition}
            setTransition={setTransition}
            categories={categories}
            currentGame={currentGame}
            setCurrentGame={setCurrentGame}
          />
        )}
        {/* game w/in category carousel */}
        {/* navebar of categories */}
        {/* Popular titles */}
        <div id="popular-titles-container">
          <PopularTitles 
          categories={categories}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
