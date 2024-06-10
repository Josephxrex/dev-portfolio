import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Tipos de propiedades que acepta el componente Carrusel
interface CarruselProps {
  images: string[];
}

// Componente Carrusel
const Carrusel: React.FC<CarruselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ padding: "10px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="h-2 w-2 bg-gray-400 rounded-full mt-2"></div>
    ),
  };

  return (
    <div className='p-10'>
      <div className=" w-full h-full p-10 m-10">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} >
              <img src={image} alt={`Slide ${index}`} className="w-full  h-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carrusel;
