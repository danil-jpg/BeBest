import 'swiper/scss';
import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation } from "swiper";
import "./HomeTeachersSlider.scss"
import HomeTeachersSlide from './HomeTeachersSlide/HomeTeachersSlide';
import ContainerMain from '../../../../common/ContainerMain/ContainerMain';

const HomeTeachersSlider = () => {

    const [slidersData, setSlidersData] = useState([]);
    useEffect(() => {
      axios.get('http://bebest.pp.ua/api/teachers-sliders/?populate=*')
        .then((response) => {
        console.log(response.data.data)
          setSlidersData(response.data.data);
        })
        .catch((error) => {
          console.error('Error fetching data', error);
        });
    }, []);
    return ( 

      <ContainerMain>
           <div className='home-teachers-slider'>
            <Swiper

                slidesPerView={4}
                spaceBetween={78}
                className='home-teachers-slider__main'
            >
                    {
                        slidersData.map(slide=>(
                            <SwiperSlide key={slide.id}>
                                <HomeTeachersSlide avatar={`http://bebest.pp.ua${slide.attributes.avatar.data.attributes.url}`}
                                                    stars={`http://bebest.pp.ua${slide.attributes.star.data.attributes.url}`}
                                                    name={slide.attributes.name}
                                                    description={slide.attributes.description}
                                >

                                </HomeTeachersSlide>
                            </SwiperSlide>
                        ))
                    }
            </Swiper>

        </div>
      </ContainerMain>
     );
}
 
export default HomeTeachersSlider;

