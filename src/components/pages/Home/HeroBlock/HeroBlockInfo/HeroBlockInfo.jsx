import React from 'react';
import './HeroBlockInfo.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import HeroBlockTitle from './HeroBlockTitle/HeroBlockTitle';
import MainButton from '../../../../UI/Buttons/MainButton/MainButton';
import HeroCustomSlider from './HeroCustomSlider/HeroCustomSlider';
import { IconRenderer } from '../../../../UI/IconRenderer/IconRenderer';

const HeroBlockInfo = () => {
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    axios
      .get('http://bebest.pp.ua/api/hero-block-informations/?populate=*')
      .then((response) => {
        setInfoData(response.data.data[0].attributes);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, []);
  return (
    <div className="hero-block">
      <div className="hero-block__info">
        <HeroBlockTitle
          key={infoData.id}
          preTitle={infoData.preTitle}
          accent={infoData.accent}
          postTitle={infoData.postTitle}
        />

        <p className="hero-block__descr">{infoData.description}</p>

        <div className="hero-block__button">
          <MainButton size="big" children={infoData.buttonTitle} />
        </div>
      </div>

      <div className="hero-block__slider slider-custom">
          <div className="hero-block__slider-teachers">
          <div className="hero-block__slider-main">
            <HeroCustomSlider />
            </div>
          <div className="hero-block__slider-bg"></div>
          </div>

        <div className="slider-custom__navigation">
          <div className="slider-custom__button-prev ">
            <IconRenderer id="slider-arrow" className="slider-custom__button" />
          </div>
          <div className="slider-custom__pagination"></div>
          <div className="slider-custom__button-next">
            <IconRenderer id="slider-arrow" className="slider-custom__button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlockInfo;
