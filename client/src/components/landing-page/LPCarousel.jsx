import React, {useState} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carouselData = [{
    image: 'https://www.escapistmagazine.com/wp-content/uploads/2019/07/GOW-Feature-Image.jpg?resize=800%2C400'
},
{
    image: 'https://images.nvidia.com/geforce-com/international/images/050616-geforce-dot-com/nvidia-ansel/nvidia-ansel-user-interface.png'
}
];

const LPCarousel = () => {
    return (
      <Carousel>
      {carouselData.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      </Carousel>
    );
  };


export default LPCarousel;