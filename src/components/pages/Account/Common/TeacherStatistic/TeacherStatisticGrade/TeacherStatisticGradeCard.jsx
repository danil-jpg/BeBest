import React from "react";
import './TeacherStatisticGrade.scss'

const TeacherStatisticGradeCard = ({icon,descr,counter}) => {
    return ( 
        <div className="grade-card">
            <div  className="grade-card__circle">
                <img className="grade-card__circle-icon" src={icon} alt="icon" />
            </div>
            <p className="grade-card__descr">{descr}</p>
            <div className="grade-card__counter">{counter}</div>
        </div>
     );
}
 
export default TeacherStatisticGradeCard;