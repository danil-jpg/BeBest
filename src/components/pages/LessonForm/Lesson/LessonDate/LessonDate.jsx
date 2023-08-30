// DatePickerComponent.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './LessonDate.scss';
import iconCalendar from "../../../../../assets/images/lesson/calendar.svg"
const LessonDate = ({size}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='lesson-date'>
      
      <DatePicker className={`lesson-date__main lesson-date__main-${size}`} selected={selectedDate} onChange={handleDateChange} />
      <img className='lesson-date__icon' src={iconCalendar} alt="" />
    </div>
  );
};

export default LessonDate;
