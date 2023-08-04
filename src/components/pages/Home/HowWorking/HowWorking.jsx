import './HowWorking.scss'
import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios"
import HowWorkingCard from './HowWorkingCard/HowWorkingCard';

const HowWorking = () => {
    const [icon, setIcon] = useState('');
    const [image,setImage] = useState('')
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('')
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        axios.get('http://bebest.pp.ua/api/how-cards/?populate=*')
          .then((response) => {
            console.log(response.data.data[0].attributes.icon.data.attributes.url)
            setCardsData(response.data.data);
          })
          .catch((error) => {
            console.error('Error fetching data', error);
          });
      }, []);

    return ( 

        
        <div className="how-working">

             {cardsData.map(card=> (
             <HowWorkingCard key={card.id} image={`http://bebest.pp.ua${card.attributes.image.data.attributes.url}`} 
                                           icon={`http://bebest.pp.ua${card.attributes.icon.data.attributes.url}`}
                                           title={card.attributes.title}
                                           description={card.attributes.description}
            />
                            
             ))}

        </div>  
     );
}
 
export default HowWorking;

