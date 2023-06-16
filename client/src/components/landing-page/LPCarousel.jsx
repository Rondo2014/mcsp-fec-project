import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carouselData = [
  {
    image:
      "https://wallpaperaccess.com/full/158936.jpg",
  },
  {
    image:
      "https://images.nvidia.com/geforce-com/international/images/050616-geforce-dot-com/nvidia-ansel/nvidia-ansel-user-interface.png",
  },
  {
    image:
      "https://wallpaperaccess.com/full/185915.jpg",
  }
];

const miniPics = [{
  image: "https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080"
},
{
  image: "https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080"
},
{
  image: "https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080"
},
{
  image: "https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080"
}]

const LPCarousel = () => {
  const [carouselImage, setCarouselImage] = useState(carouselData[0].image);

  const handleImageHover = (image) => {
    setCarouselImage(image);
  };

  return (
    <>
    <div className="flex items-center justify-center">
      <h2 className="text-l text-cyan-50">FEATURED & RECOMMENDED</h2>
    </div>
    <div className="carousel-container flex items-center justify-center bg-gray-800">
      <Carousel className="w-2/3" showThumbs={false}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
      <div className="grid grid-cols-2 gap-2 pb-5 pl-1">
        {miniPics.map((item, index) => (
          <img 
          className="w-40 h-20 object-cover"
          key={index}
          src={item.image}
          alt={`Slide ${index + 1}`}
          onMouseEnter={() => handleImageHover(item.image)}
          onMouseLeave={() => handleImageHover(null)}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default LPCarousel;
