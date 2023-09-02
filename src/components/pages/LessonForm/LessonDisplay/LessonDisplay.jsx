

import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import "./LessonDisplay.scss";
import icon from "../../../../assets/images/lesson/icon.svg"
import deleteIcon from "../../../../assets/images/lesson/deleteIcon.svg"
const LessonDisplay = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
      axios.get('http://bebest.pp.ua/api/users/?populate=*')
        .then((response) => {
          console.log(response.data)
          setUsers(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data', error);
        });
    }, []);
  const [selectedItems, setSelectedItems] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleItemSelect = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleItemRemove = (item) => {
    setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
  };

  return (
   <div className="display-dropdown">
    <h3 className="display-dropdown__title">Добавить учеников</h3>
     <div className="display-dropdown__input">
        <div className="display-dropdown__btn"><button onClick={toggleDropdown}><img src={icon} alt="" /></button></div>
      {dropdownVisible && (
        <div >
          {users.map((user) => (
            <div className="display-dropdown__list" key={user}>
              <button className="display-dropdown__list-user" onClick={() => handleItemSelect(user.username)}>{user.username}</button>
            </div>
          ))}
        </div>
      )}
    </div>
    <div>
        {selectedItems.map((selectedItem) => (
          <div className="display-dropdown__user" key={selectedItem}>
            {selectedItem}
            <button className="display-dropdown__btn-delete" onClick={() => handleItemRemove(selectedItem)}> <img src={deleteIcon} alt="icon" /> Исключить</button>
          </div>
        ))}
      </div>
   </div>
  );
};

export default LessonDisplay;


