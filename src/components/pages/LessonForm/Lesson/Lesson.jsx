import React, { useState } from 'react';
import LessonForm from '../LessonForm';
import LessonDisplay from '../LessonDisplay/LessonDisplay';
import {store} from "./../../../../store/store"
import { Provider } from 'react-redux';


const Lesson = () => {  
    const [createdLesson, setCreatedLesson] = useState(null);

    const handleCreateLesson = (lessonData) => {
      setCreatedLesson(lessonData);
    };

    return ( 
        <Provider store={store}>
        <div>
          <h1>Создание и отображение группового урока</h1>
          <LessonForm onSubmit={handleCreateLesson} />
        <LessonDisplay lesson={createdLesson} />
        </div>
      </Provider>
     );
}
 
export default Lesson;