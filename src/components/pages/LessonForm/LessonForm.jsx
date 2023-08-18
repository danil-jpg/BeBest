import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateFormData} from "../../../store/slices/createLessonSlice/createLessonSlise"
import "./LessonForm.scss"


const LessonForm = ({ onSubmit }) => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.lesson.formData);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      dispatch(updateFormData({ [name]: value }));
    };
    return ( 
        <div>
 <form onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Название урока"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="Длительность"
      />
      <label>
        Выберите флаг:
        <select
          name="selectedCountry"
          value={formData.selectedCountry}
          onChange={handleChange}
        >
          <option value="">Выберите флаг</option>
          <option value="sp">Испания</option>
          <option value="us">США</option>
        </select>
      </label>
      <button type="submit">Создать урок</button>
    </form>
        </div>
     );
}
 
export default LessonForm;