import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carouselData = [
  {
    image:
      "https://www.escapistmagazine.com/wp-content/uploads/2019/07/GOW-Feature-Image.jpg?resize=800%2C400",
  },
  {
    image:
      "https://images.nvidia.com/geforce-com/international/images/050616-geforce-dot-com/nvidia-ansel/nvidia-ansel-user-interface.png",
  },
];

const LPCarousel = () => {
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
        <img className="w-40 h-20 object-cover" src="https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080" alt="minipic"/>
        <img className="w-40 h-20 object-cover" src="https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080" alt="minipic"/>
        <img className="w-40 h-20 object-cover" src="https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080" alt="minipic"/>
        <img className="w-40 h-20 object-cover" src="https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080" alt="minipic"/>
      </div>
    </div>

    </>
  );
};

export default LPCarousel;
