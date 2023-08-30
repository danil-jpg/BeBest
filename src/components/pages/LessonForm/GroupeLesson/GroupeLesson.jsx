import React from 'react';
import './GroupeLesson.scss';
import Title from '../../../UI/Title/Title';
import ContainerMain from '../../../common/ContainerMain/ContainerMain';
import iconClock from '../../../../assets/images/lesson/clock.svg';
import flag from '../../../../assets/images/lesson/flag-1.png';
import Picture from '../../../UI/Picture/Picture';
import icon1 from '../../../../assets/images/lesson/clock-2.svg';
import icon2 from '../../../../assets/images/lesson/icon-2.svg';
import icon3 from '../../../../assets/images/lesson/icon-3.svg';
import GroupeLessonTag from './GroupeLessonTag/GroupeLessonTag';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';
import imageDecor2 from "../../../../assets/images/lesson/decor2.png";
import imageDecor1 from "../../../../assets/images/lesson/decor.png"
import { useState } from 'react';
import LessonModal from './GroupeLessonModal/GroupeLessonModal';
import LessonDate from '../Lesson/LessonDate/LessonDate';
import ModalTag from './GroupeLessonModal/GroupeLessonModalTag/ModalTag';
const GroupeLesson = () => {
  const [translateModal, setTranslateModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const time =['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
  return (
    
      <div className="groupe-lesson">
        <img  className="groupe-lesson__first" src={imageDecor1} alt="decor" />
        <img  className="groupe-lesson__second" src={imageDecor2} alt="decor" />
        <ContainerMain>
        <Title children="Групповой урок" />
        <div className="groupe-lesson__main">
          <div className="groupe-lesson__main-info">
            <div className="groupe-lesson__top">
              <h4 className="groupe-lesson__date">28 июня 2021</h4>
              <div className="groupe-lesson__time">
                <img src={iconClock} alt="icon" />
                <p>14:00</p>
              </div>
            </div>
            <div className="groupe-lesson__title">
              <h3>Базовые навыки испанского языка</h3>
            </div>
            <div className="groupe-lesson__tags">
              <GroupeLessonTag icon={icon1} title={'1 час'} color={'pink'} />
              <GroupeLessonTag
                icon={icon2}
                title={'Beginners'}
                color={'purple'}
              />
              <GroupeLessonTag
                icon={icon3}
                title={'10-15 лет'}
                color={'blue'}
              />
            </div>
            <div className="groupe-lesson__description">
              <p>
                Укрепление и развитие структуры позволяет выполнять важные
                задания по разработке системы обучения кадров, соответствует
                насущным потребностям. Таким образом реализация намеченных
                плановых заданий способствует подготовки и реализации модели
                развития. Идейные соображения высшего порядка, а также
                консультация с широким активом способствует подготовки и
                реализации модели развития.
              </p>
            </div>
            <div className="groupe-lesson__register">
                <div className="groupe-lesson__register-block">
                    <h4 className="groupe-lesson__register-title">Зарегистрировались:</h4>
                    <p>15 человек</p>
                </div>
                <div className="groupe-lesson__register-block">
                <h4 className="groupe-lesson__register-title">Максимум:</h4>
                    <p>20 человек</p>
                </div>
            </div>
            <div className="groupe-lesson__price">
                <h4>Стоимость урока:</h4>
                <h5><span>1000 $ </span></h5>
            </div>
          </div>
          <div className="groupe-lesson__main-image">
            <Picture img={flag} />
          </div>
        </div>
        <div className="groupe-lesson__buttons">
                <MainButton onClick={()=>setTranslateModal(true)} maxWidth='200px' className='groupe-lesson__buttons-postpone' children={'Перенести урок'}/>
                <MainButton to='/lesson'  maxWidth='225px' className='groupe-lesson__buttons-edit' children={'Редактировать урок'}/>
                <MainButton onClick={()=>setCancelModal(true)}  maxWidth='171px'className='groupe-lesson__buttons-cancel' type='white' children={'Отменить урок'}/>
            </div>
            </ContainerMain>
            <LessonModal className='groupe-lesson__modal' active={translateModal} setActive={setTranslateModal}>
                <Title children={'Перенести урок'}/>
                <div className="groupe-lesson__modal-main">
                  <div className="groupe-lesson__modal-top">
                    <p>Дата урока</p>
                    <LessonDate className='groupe-lesson__modal-input' size={'big'}/>
                  </div>
                  <div className="groupe-lesson__modal-tags">
                      {time.map(item=>{
                          return <ModalTag time={item}/>
                      })}
                  </div>
                  <div className="groupe-lesson__modal-area">
                    <p>Причина переноса</p>
                    <textarea className='groupe-lesson__modal-textarea'></textarea>
                  </div>
                  <div className="groupe-lesson__modal-button">
                    <MainButton onClick={()=>setTranslateModal(false)} maxWidth='200px' size='small' children={'Перенести'}/>
                </div>
                </div>
            </LessonModal>
            <LessonModal className='groupe-lesson__modal' active={cancelModal} setActive={setCancelModal}>
            <Title children={'Отменить урок'}/>
                    <p>Причина отмены урока</p>
                    <textarea className='groupe-lesson__modal-textarea-cancel'></textarea>
                    <MainButton onClick={()=>setCancelModal(false)} maxWidth='200px' size='small' children={'Отменить'}/>

            </LessonModal>

      </div>
   
  );
};

export default GroupeLesson;
