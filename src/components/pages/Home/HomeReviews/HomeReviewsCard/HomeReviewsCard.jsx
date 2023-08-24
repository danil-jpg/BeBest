import Picture from "../../../../UI/Picture/Picture";
import "./HomeReviewsCard.scss"
import React from "react"

const HomeReviewsCard = ({buttonTitle, date,description,avatar,name,city}) => {
    return ( 
        <div className="home-reviews-card">
                <div className="home-reviews-card__top">
                    <button>{buttonTitle}</button>
                    <span className="home-reviews-card__date">{date}</span>
                </div>
                <div className="home-reviews-card__description">
                    <p>{description}</p>
                </div>
                <div className="home-reviews-card__information">
                    <div className="home-reviews-card__image">
                    <Picture img={avatar}/>
                    </div>
                    <div className="home-reviews-card__description">
                        <p>{name}</p>
                        <span>{city}</span>
                    </div>
                </div>
        </div>
     );
}
 
export default HomeReviewsCard;