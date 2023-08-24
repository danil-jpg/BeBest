import React from "react";
import "./HomeTeachersSlide.scss"
import Picture from "../../../../../UI/Picture/Picture";

const HomeTeachersSlide = ({avatar,stars,name,description}) => {
    return ( 
        <div className="home-teachers-slide">
            <img  className="home-teachers-slide__avatar" src={avatar} alt="avatar" />
            <img className="home-teachers-slide__stars" src={stars} alt="decor" />
            <h3 className="home-teachers-slide__name">{name}</h3>
            <p className="home-teachers-slide__description">{description}</p>
        </div>
     );
}
 
export default HomeTeachersSlide;