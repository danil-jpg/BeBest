import React from "react";
import "./Advantages.scss"
import axios from "axios";
import { useState, useEffect } from 'react';
import AdvantagesCard from "./AdvantagesCard/AdvantagesCard";
import Title from "../../../UI/Title/Title";
const Advantages = () => {

    const [cardData, setCardData]=useState([])
    useEffect(() => {
        axios.get('http://bebest.pp.ua/api/advantages-cards/?populate=*')
          .then((response) => {
            console.log(response.data.data)
            setCardData(response.data.data);
          })
          .catch((error) => {
            console.error('Error fetching data', error);
          });
      }, []);
    return ( 
        <div className="advantages-block">
            <div className="advantages-block__wrapper">
                <div className="advantages-block__title"><Title children={"Наши преимущества"}/></div>
            </div>
            <div className="advantages-block__cards">
                {cardData.map(card=>(
                    <AdvantagesCard  key={card.id}
                    icon={`http://bebest.pp.ua${card.attributes.icon.data.attributes.url}`}
                    title={card.attributes.title}    
                    description={card.attributes.description} 
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Advantages;