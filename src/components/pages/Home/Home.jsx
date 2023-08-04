import React from 'react';
import './Home.scss';
import Loading from '../../common/Loading/Loading';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import { useState,useEffect } from 'react';
import axios from "axios"
import MainButton from '../../UI/Buttons/MainButton/MainButton';
import HowWorking from './HowWorking/HowWorking';

const Home = (props) => {

    return (
        <main className='home'>
            <ContainerMain>
            <HowWorking/>
            </ContainerMain>
            
        </main>
    );
};

export default Home;

