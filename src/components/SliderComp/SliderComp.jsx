import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaLocationPin } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';

const SliderComp = ({data}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  }

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {data.map((item, i) => (
          <div key={i}>
            <div className='min-h-[70vh] rounded-xl flex flex-col justify-end items-center' style={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
              <div className='bg-gray-900 p-4 rounded-xl mb-4'>
                <h1 className='font-bold text-3xl text-center'>{item.title}</h1>
                <div className='flex gap-1'><IoLocation className='text-xl text-red-400'></IoLocation> {item.location}</div>
                <p className='text-gray-400'>{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;