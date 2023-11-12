import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';

function Hero() {
  
  return (
    <div className='mx-auto'>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-56">
        <Carousel indicatorsType="ring" indicators={true}>
          <img
            className='w-full h-full object-cover'
            src="https://img.freepik.com/free-photo/box-market-electronic-ordering-shop-basket_1421-567.jpg?size=626&ext=jpg"
            alt="slider-1"
          />
          <img
            className='w-full h-full object-cover'
            src="https://images.prismic.io/staticmania/dee3ff09-3ddc-4340-bc8f-ea0028bb4a61_2.png?auto=compress,format"
            alt="slider-2"
          />
          <img
            className='w-full h-full object-cover'
            src="https://images.prismic.io/staticmania/a5c7143d-24dd-4531-9f00-243f4eb27e28_3.png?auto=compress,format"
            alt="slider-3"
          />
          <img
            className='w-full h-full object-cover'
            src="https://images.prismic.io/staticmania/c5cf46a8-b10c-43c8-a60e-6692838cdee1_4.png?auto=compress,format"
            alt="slider-4"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
