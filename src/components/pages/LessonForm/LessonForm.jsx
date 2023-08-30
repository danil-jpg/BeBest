import React from "react";
import "./LessonForm.scss";
import LessonInput from "./Lesson/LessonInput/LessonInput";
import Title from "../../UI/Title/Title";
import LessonDropdown from "./Lesson/LessonDropdown/LessonDropdown";
import LessonDate from "./Lesson/LessonDate/LessonDate";
import priceIcon from "../../../assets/images/lesson/dollar.svg"
import LessonsDisplay from "./LessonDisplay/LessonDisplay";
import MainButton from "../../UI/Buttons/MainButton/MainButton";
import GroupeLesson from "./GroupeLesson/GroupeLesson";
import { Link } from "react-router-dom";
const LessonForm = () => {
    const teachers = ['Суровская Александрина Георгиевна', 'Homer Simpson', 'Peater Griffin', ];
    const timeLesson =['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];
    const lessonDuration=['1 час','2 часа','3 часа','4 часа','5 часов','6 часов','7 часов','8 часов']
    const level = ['Begginer','Elementary','Pre-Intermediate','Intermediate','Upper-Intermediate','Advanced','Proficiency']
    const age =['10-15лет','15-20лет','20-25лет','25-30лет','30-35лет','35-40лет','40-45лет','45-50лет','50-55лет','55-60лет','60-65лет','65-70лет','70-75лет','75-80лет','80-85лет','85-90лет','90-95лет','95-100лет']
    const handleOptionSelect = (selectedOption) => {
    console.log('Selected:', selectedOption);
  };
    return ( 
        <div className="lesson-form">
            <Title children={'Создание группового урока'}/>
            <div className="lesson-form__info">
            <div className="lesson-form__main">
            <div className="lesson-form__main-top form-top">
                <div className="form-top__name">
                    <h4 className="form-top__name-title">Название урока</h4>
                    <LessonInput children={"Базовые навыки испанского языка"}/>
                </div>
                <div className="form-top__teacher">
                    <h4 className="form-top__name-title">Назначить преподавателя</h4>
                    <LessonDropdown options={teachers} onSelect={handleOptionSelect} placeholder={"Выберите предподователя"} />
                </div>
            </div>
            <div className="lesson-form__main-bottom form-bottom">
                <div className="form-bottom__left"> 
                <div className="form-bottom__date-lesson">
                <h4 className="form-top__name-title">Дата урока</h4>
                <LessonDate  size={'big'}/>
                </div>
                <div className="form-bottom__time-lesson">
                <h4 className="form-top__name-title">Период набора участников</h4>
                <div className="form-bottom__time-lesson-input">
                <LessonDate size={'small'} />
                <div className="form-bottom__decor"></div>
                <LessonDate  size={'small'}/>
                 </div>
                 </div>
                 <div className="form-bottom__time-lesson-time">
                 <h4 className="form-top__name-title">Время начала урока</h4>
                 <LessonDropdown options={timeLesson} onSelect={handleOptionSelect} placeholder={"Выберите время"} />
                 </div>
                 <div className="form-bottom__time-lesson-duration">
                 <h4 className="form-top__name-title">Длительность урока</h4>
                 <LessonDropdown options={lessonDuration} onSelect={handleOptionSelect} placeholder={"Установите длительность урока"} />
                 </div>
                 <div className="form-bottom__time-lesson-price">
                    <h4 className="form-top__name-title">Стоимость урока</h4>
                    <div>
                    <LessonInput children={"Укажите стоимость урока"}/>
                    <img src={priceIcon} alt="icon" />
                    </div>
                 </div>
                 <div className="form-bottom__time-lesson-quantity">
                    <h4 className="form-top__name-title">Минимальное кол-во участников</h4>
                    <LessonInput children={"Укажите мнимальное кол-во участников"}/>

                 </div>
                </div>
                <div className="form-bottom__right">
                    <div className="form-bottom__right-level">
                    <h4 className="form-top__name-title">Уровень учеников</h4>
                    <LessonDropdown options={level} onSelect={handleOptionSelect} placeholder={"Установите уровень учеников"} />
                    </div>
                    <div className="form-bottom__right-age">
                    <h4 className="form-top__name-title">Возраст учеников</h4>
                    <LessonDropdown options={age} onSelect={handleOptionSelect} placeholder={"Установите возраст учеников"} />
                    </div>
                    <div className="form-bottom__right-description">
                    <h4 className="form-top__name-title">Описание урока</h4>
                    <textarea name="descr"></textarea>
                    </div>
                    <div className="form-bottom__right-quantity">
                    <h4 className="form-top__name-title">Максимальное кол-во участников</h4>
                    <LessonInput children={"Укажите максимальное кол-во участников"}/>

                 </div>
                </div>
            </div>
            </div>
            <div className="lesson-form__users">
                <LessonsDisplay/>
            </div>
            </div>
            <div className="lesson-form__buttons">
              <div className='lesson-form__buttons-big'><MainButton to={'/groupeLesson'}>Создать урок</MainButton></div>
              <div className='lesson-form__buttons-small'><MainButton  type="white">Отменить</MainButton> </div>
            </div>
        </div>
     );
}
 
export default LessonForm;



