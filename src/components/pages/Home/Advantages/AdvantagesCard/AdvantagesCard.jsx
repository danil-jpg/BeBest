import "./AdvantagesCard.scss"
import React from "react"
import Picture from "../../../../UI/Picture/Picture";
const AdvantagesCard = ({icon,title,description}) => {
    return ( 
        <div className="advantages-card">
           <div className="advantages-card__image"> <Picture img={icon}/></div>
            <h3 className="advantages-card__title">{title}</h3>
            <p className="advantages-card__description">{description}</p>
        </div>
     );    
}
 
export default AdvantagesCard;