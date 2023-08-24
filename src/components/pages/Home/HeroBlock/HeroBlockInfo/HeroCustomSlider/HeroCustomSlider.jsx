import 'swiper/scss';
import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation } from "swiper";

const HeroCustomSlider = () => {
  const [slidersData, setSlidersData] = useState([]);
  useEffect(() => {
    axios.get('http://bebest.pp.ua/api/teachers-photo-sliders/?populate=*')
      .then((response) => {
        setSlidersData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, []);

    return ( 
        <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl:'.slider-custom__button-next',
          prevEl:'.slider-custom__button-prev'
        }}
        loop={true}
        pagination={{
          type: 'fraction',
          el:'.slider-custom__pagination',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index < 10 ? '0' + index : index) + '</span>';
          },
          
        }}            
      >
        {slidersData.map(slide=>(
            <SwiperSlide key={slide.id} className='hero-custom__slide'>
            <img src={`http://bebest.pp.ua${slide.attributes.image.data.attributes.url}`} alt="photo" />
            </SwiperSlide>
        ))}

      </Swiper>
     );
}
 
export default HeroCustomSlider;


