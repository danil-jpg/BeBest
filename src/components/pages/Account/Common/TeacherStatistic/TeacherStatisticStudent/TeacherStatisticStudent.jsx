import React from "react";
import "./TeacherStatisticStudent.scss"

const TeacherStatisticStudent = ({avatar,name}) => {
    return ( 
        <div className="teacher-statistic__student">
            <img className="teacher-statistic__student-avatar" src={avatar} alt="avatar" />
            <p className="teacher-statistic__student-name">{name}</p>
        </div>  
     );
}
 
export default TeacherStatisticStudent;

//teachers-stat-students