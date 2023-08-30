import React from "react";
import "./Lesson.scss";
import ContainerMain from "../../../common/ContainerMain/ContainerMain";
import LessonForm from "../LessonForm";
const Lesson = () => {
  return ( 
    <div>
      <ContainerMain>
      <LessonForm/>
      </ContainerMain>
    </div>
   );
}
 
export default Lesson;