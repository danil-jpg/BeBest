// Dropdown.js
import React, { useState } from 'react';
import './LessonDropdown.scss';
import arrowIcon from "../../../../../assets/images/lesson/arrow.svg"
const LessonDropdown = ({ options, onSelect,placeholder}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="lesson-dropdown">
      <button className="lesson-dropdown__toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || placeholder}
      </button>
      {isOpen && (
        <ul className="lesson-dropdown__options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      <img src={arrowIcon} alt="" />
    </div>
  );
};

export default LessonDropdown;
