import React from 'react';
import './Home.scss';
import Loading from '../../common/Loading/Loading';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import { useState,useEffect } from 'react';
import axios from "axios"
import MainButton from '../../UI/Buttons/MainButton/MainButton';
import HowWorking from './HowWorking/HowWorking';
import "./Home.scss"
import HeroBlock from './HeroBlock/HeroBlock';
import PopularCourse from './PopularCourse/PopularCourse';
import Advantages from './Advantages/Advantages';
import HomeTeachers from './HomeTeachers/HomeTeachers';

const Home = (props) => {

    return (
        <main className='home'>


            <ContainerMain>
                <HeroBlock/>
                <PopularCourse/>
                <HowWorking/>
                <Advantages/>
            </ContainerMain>

            <HomeTeachers/>
        </main>
    );
};

export default Home;

