import React from "react";
import "./TeacherStatisticCard.scss"

const TeacherStatisticCard = ({teacherStatisticData}) => {
    return ( 
        <div className="teacher-card">
            <h3 className="teacher-card__title">{teacherStatisticData.title}</h3>
            <p className="teacher-card__number">{teacherStatisticData.number}</p>
        </div>
     );
}
 
export default TeacherStatisticCard;