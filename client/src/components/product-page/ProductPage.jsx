import React, { useEffect, useState } from "react";
import StoreNavBar from "../landing-page/StoreNavBar";
import TitleBar from "./TitleBar";
import ProductCarousel from "./ProductCarousel";
import api from "../../api/axios";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [game, setGame] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getGame = async () => {
      try {
        const res = await api.get(`/api/game/${id}`);
        console.log(res.data);
        setGame(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getGame();
  }, [id]);

  return (
    <>
      <StoreNavBar />
      <TitleBar game={game} />
      <ProductCarousel game={game} />
    </>
  );
};

export default ProductPage;
