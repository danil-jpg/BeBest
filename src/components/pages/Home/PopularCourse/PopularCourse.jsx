import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';

import PopularCourseCard from "./PopularCourseCard/PopularCourseCard";
import "./PopularCourse.scss"
import Title from "../../../UI/Title/Title";


const PopularCourse = () => {

    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        axios.get('http://bebest.pp.ua/api/popular-courses/?populate=*')
          .then((response) => {
            console.log(response.data.data)
            setCardData(response.data.data);
          })
          .catch((error) => {
            console.error('Error fetching data', error);
          });
      }, []);

    return ( 
        <div className="popular-course">
            <div className="popular-course__title">
                <Title children={"Популярные курсы"}/>
            </div>
                <div className="popular-course__cards">
                {cardData.map(card=>(
                <PopularCourseCard key={card.id} 
                description={card.attributes.description}
                img={`http://bebest.pp.ua${card.attributes.image.data.attributes.url}`}
                buttonTitle={card.attributes.buttonText}
                />
            ))}
                </div>
        </div>
     );
}
 
export default PopularCourse;