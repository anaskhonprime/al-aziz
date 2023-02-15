import { React, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import imageData from "../asset/data/carousel";

const renderSlides = imageData.map(image => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
  </div>
));

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="flex justify-center items-center mt-32 py-5 px-3">
      <div className="m-auto">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="w-[400px] lg:hidden">
          {renderSlides}
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
