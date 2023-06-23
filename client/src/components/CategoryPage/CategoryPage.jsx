import React, { useEffect, useState } from 'react'
import StoreNavBar from "../landing-page/StoreNavBar";
import CategoryDiv from './CategoryDiv';
import PopularTitles from './PopularTitles';
import { useParams } from 'react-router-dom';
import api from '../../api/axios';

const CategoryPage = () => {
  const [categoies, setCategoies] = useState([]);
  const [currentGame, setCurrentGame] = useState(0)
  const [loading, setLoading] = useState(true)
    //pass game state down to category div
  const { id } = useParams();
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await api.get(`/api/games/${id}`);
        setCategoies(res.data);
        setLoading(false);
        console.log('current game', currentGame)
      }
      catch (error) {
        console.log(error)
      }
    }
    getCategories();
  }, [])

  return (
    
    <div className='bg-[#030406]'>
      <StoreNavBar />
      {/* category div w/ bg image from game */}
      {loading ? <div>loading...</div> :       <CategoryDiv 
        categoies={categoies}
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
      />}
      {/* game w/in category carousel */}
      {/* navebar of categories */}
      {/* Popular titles */}
      <div id='popular-titles-container'>
      <PopularTitles />
      </div>

    </div>
  )
}

export default CategoryPage
