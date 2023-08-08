import "./HowWorkingCard.scss"
import React from "react";
const HowWorkingCard = ({image,icon, title,description}) => {
    return ( 
        <div className="how-working__card">
            <div className="how-working__card-images">
                <img src={icon} alt="icon" />
                <img className="image" src={image} alt="img" />
            </div>
            <div className="how-working__card-information">
                <h3 className="how-working__card-title">{title}</h3>
                <p className="how-working__card-description">
                    {description}
                </p>
            </div>
        </div>
     );
}
 
export default HowWorkingCard;