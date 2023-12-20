import React from "react";
import Slider from "react-slick";
import "./ImageSlider.css"; // Create this CSS file to style your slider

const ImageSlider = () => {
  
  const images = [
    "/Images/18.png",
    "/Images/19.png",
    "/Images/20.png",
    // Add more image paths here
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="image-slider-container relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-image">
            <img src={process.env.PUBLIC_URL + image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white" style={{'color':"white"}}>
          Welcome to Nourish Net
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-2 text-white" style={{'color':"white"}}>
          Need Food?
        </p>
        <a href='/signup'>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm md:text-base px-3 md:px-4 py-2 text-center md:mr-0 dark:bg-coffee dark:hover:bg-coffee dark:focus:ring-blue-800"style={{'color':"white"}}>
            Join Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default ImageSlider;
