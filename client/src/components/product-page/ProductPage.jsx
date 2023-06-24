import React, { useEffect, useState } from "react";
import StoreNavBar from "../landing-page/StoreNavBar";
import TitleBar from "./TitleBar";
import ProductCarousel from "./ProductCarousel";
import Purchase from "./Purchase";
import api from "../../api/axios";
import { useParams } from "react-router-dom";

const ProductPage = ({ setRecentlyViewed, recentlyViewed }) => {
  const [game, setGame] = useState({});
  const [loading, setIsLoading] = useState(true);
 

  const { id } = useParams();

  useEffect(() => {
    const getGame = async () => {
      try {
        const res = await api.get(`/api/game/${id}`);
        setGame(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    getGame();
  }, []);

  useEffect(() => {
    if (!recentlyViewed.includes(game.title && game.id)) {
      const newRecentlyViewed = recentlyViewed.filter(
        (item) => item.id !== game.id
      );
      setRecentlyViewed([
        { title: game.title, id: game.id },
        ...newRecentlyViewed,
      ]);
    } else {
      return;
    }
  }, [!loading]);

  

  return (
    <>
      <StoreNavBar />
      {loading ? <div>Loading...</div> : <TitleBar game={game} />}
      {loading ? <div>Loading...</div> : <ProductCarousel game={game} />}
      {loading ? <div>Loading...</div> : <Purchase game={game} />}
    </>
  );
};

export default ProductPage;
