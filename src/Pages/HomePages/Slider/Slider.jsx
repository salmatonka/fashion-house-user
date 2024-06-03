import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay,EffectCoverflow,Pagination } from 'swiper/modules';

import './Slider.css';
import SectionTitle from '../../../Shares/SectionTitle/SectionTitle';

const Slider = () => {
  return (
    <section className='lg:px-20'>
    <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
    />
     <>
<Swiper
effect={'coverflow'}
grabCursor={true}
centeredSlides={true}
autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
slidesPerView={'auto'}
coverflowEffect={{
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
}}
pagination={true}
modules={[Autoplay,EffectCoverflow, Pagination]}
className="mySwiper"
>
<SwiperSlide>
  <img src='http://localhost:5174/src/assets/slider/slide3.jpg' alt='' />
  <h3 className="text-4xl uppercase text-center -mt-24 text-gray-100">Salads</h3>
</SwiperSlide>
<SwiperSlide>
  <img src='http://localhost:5174/src/assets/slider/slide3.jpg' alt=''/>
  <h3 className="text-4xl uppercase text-center -mt-16 text-gray-50">Pizzas</h3>
</SwiperSlide>
<SwiperSlide>
  <img src='http://localhost:5174/src/assets/slider/slide3.jpg' alt='' />
  <h3 className="text-4xl uppercase text-center -mt-16 text-gray-50">Soups</h3>
</SwiperSlide>
<SwiperSlide>
  <img src='http://localhost:5174/src/assets/slider/slide3.jpg' alt='' />
  <h3 className="text-4xl uppercase text-center -mt-16 text-gray-50">Desserts</h3>
</SwiperSlide>
<SwiperSlide>
  <img src='http://localhost:5174/src/assets/slider/slide3.jpg' alt='' />
  <h3 className="text-4xl uppercase text-center -mt-16 text-gray-50">popular</h3>
</SwiperSlide>
</Swiper>
</>
</section>

    );
}
export default Slider
