import React, { useEffect, useState } from 'react'
import StoreNavBar from "../landing-page/StoreNavBar";
import CategoryDiv from './CategoryDiv';
import PopularTitles from './PopularTitles';
import { useParams } from 'react-router-dom';
import api from '../../api/axios';

const CategoryPage = () => {
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  console.log(useParams())
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = api.get(`/api/games/${id}`);
        setCategory(res.data);
        console.log(res.data);
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
      <CategoryDiv />
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
