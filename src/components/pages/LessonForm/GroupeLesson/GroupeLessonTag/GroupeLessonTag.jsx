import React from "react";
import "./GroupeLessonTag.scss";

const GroupeLessonTag = ({icon,title,color}) => {
    return ( 
        <div className={`groupe-lesson-tag tag-color__${color}`}>
            <div className="groupe-lesson-tag__icon">
                <img src={icon} alt="icon" />
            </div>
            <div className="groupe-lesson-tag__title">
                <h3>{title}</h3>
            </div>
        </div>
     );
}
 
export default GroupeLessonTag;