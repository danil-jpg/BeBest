import React from "react";
import "./Lesson.scss";
import ContainerMain from "../../../common/ContainerMain/ContainerMain";
import LessonForm from "../LessonForm";
import imageDecor2 from "../../../../assets/images/lesson/decor2.png";
import imageDecor1 from "../../../../assets/images/lesson/decor.png"
const Lesson = () => {
  return ( 
    <div className="lesson-create">
      <img  className="lesson-create__first" src={imageDecor1} alt="decor" />
      <img  className="lesson-create__second" src={imageDecor2} alt="decor" />

      <ContainerMain>
      <LessonForm/>
      </ContainerMain>
    </div>
   );
}
 
export default Lesson;