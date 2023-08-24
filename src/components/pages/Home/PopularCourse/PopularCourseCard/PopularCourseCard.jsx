import React from "react";
import Picture from "../../../../UI/Picture/Picture";
import MainButton from "../../../../UI/Buttons/MainButton/MainButton";
import "./PopularCourseCard.scss"

const PopularCourseCard = ({img,description,buttonTitle}) => {
    return ( 
        <div className="popular-course__card">
            <div className="popular-course__card-image">
            <Picture img={img} />   
            <div className="popular-course__card-bg"></div>
            </div>
            <div className="popular-course__card-info">
                <p className="popular-course__card-description">{description}</p>
                <div className="popular-course__card-btn">
                    <MainButton size="small" children={buttonTitle}/>
                    </div>
            </div>
        </div>
     );    
}
 
export default PopularCourseCard;