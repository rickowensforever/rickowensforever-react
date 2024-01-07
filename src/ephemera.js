// Ephemera.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ephemera.css';

const Ephemera = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div className="ephemera">
      <div className="slider">
        <Slider {...settings}>
          <div className="slick-slide">
            <img className="slick-image" src="./swans_lookbook.png" alt="Swans Lookbook" />
            <p className="image-text">Rick Owens<br/>spring/summer 2000</p>
          </div>
          <div className="slick-slide">
            <img className="slick-image" src="./revillon_lookbook.png" alt="Revillon Lookbook" />
            <p className="image-text">Revillon<br/>fall/winter 2003</p>
          </div>
          <div className="slick-slide">
            <img className="slick-image" src="./citroen_lookbook.png" alt="Citroen Polaroid" />
            <p className="image-text">Rick Owens<br/>spring/summer 2004</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Ephemera;
