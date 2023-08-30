import React from "react";
import "./GroupeLessonModal.scss";

const LessonModal = ({active,setActive,children,title}) => {
    return ( 
        <div className={active ? `lesson-modal active`: `lesson-modal`} onClick={()=>setActive(false)}>
                <div className={active ? `lesson-modal__content active-animation`: `lesson-modal__content`} onClick={e=>e.stopPropagation()}>
                {children}
                </div>
        </div>
     );
}
 
export default LessonModal;