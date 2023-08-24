import React from 'react';
import { useSelector } from 'react-redux';

const LessonDisplay  = ({ lesson }) => {
    const createdLesson = useSelector((state) => state.lesson.createdLesson);
    if (!createdLesson) {
        return <div>Урок не создан</div>;
      }
    return  (
        <div>
          <h2>{lesson.title}</h2>
          <p>Дата: {lesson.date}</p>
          <p>Длительность: {lesson.duration}</p>
          <p>Выбранный флаг: {lesson.selectedCountry}</p>

        </div>
      );

}
 
export default LessonDisplay ;