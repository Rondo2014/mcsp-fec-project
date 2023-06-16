import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import api from "../../api/axios.js";

// const carouselData = [
//   {
//     image:
//       "https://wallpaperaccess.com/full/158936.jpg",
//   },
//   {
//     image:
//       "https://images.nvidia.com/geforce-com/international/images/050616-geforce-dot-com/nvidia-ansel/nvidia-ansel-user-interface.png",
//   },
//   {
//     image:
//       "https://wallpaperaccess.com/full/185915.jpg",
//   }
// ];

// const miniPics = [{
//   image: "https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080"
// },
// {
//   image: "https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080"
// },
// {
//   image: "https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080"
// },
// {
//   image: "https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080"
// }]

//create a state to store database info
//


const LPCarousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  // {item.map(item => {
  //   return (item.images.map(image => image))
  // })[0]}
  const imageArr = carouselData.map(item => {
    const images = item.images.map(image => image)
    return images
  })
    console.log("image array", imageArr);
  useEffect(() => {
    const getData = async () => {
    try {
      const response = await api.get("/api/games");

      setCarouselData(response.data)
      console.log(response.data[0].images[0]);
    } catch (error) {
      console.error(error);
    }
  }
  getData();
  }, []);
  
  // const handleImageHover = (image) => {
  //   setCarouselImage(image);
  // };
  
  return (
    <>
    <div className="flex items-center justify-center">
      <h2 className="text-l text-cyan-50">FEATURED & RECOMMENDED</h2>
    </div>
    <div className="carousel-container flex items-center justify-center bg-gray-800">
      <Carousel className="w-2/3" showThumbs={false}>
        {carouselData.map((item) => (
          <div key={item.id}>
            <img
              src={item.game_image}
              alt={`Slide`}
            />
          </div>
        ))}
      </Carousel>
      <div className="grid grid-cols-2 gap-2 pb-5 pl-1">
        {carouselData.map((item) => (
          <img 
          className="w-40 h-20 object-cover"
          key={item.id}
          src={item.images.map(image => image)}
          alt={`Slide`}
          // onMouseEnter={() => handleImageHover(item.image)}
          // onMouseLeave={() => handleImageHover(null)}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default LPCarousel;
