import React from "react";
import "./LessonInput.scss";

const LessonInput = ({children}) => {
    return ( 
        <input className="lesson-input" type="text" placeholder={children} />
        
     );
}
 
export default LessonInput;