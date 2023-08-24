import './OnlineLessonMeet.scss';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Title from '../../../UI/Title/Title';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';
import icon from "./../../../../assets/images/main/icon1.svg"

const OnlineLessonMeet = () => {
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [isCallEnded, setIsCallEnded] = useState(false);
  const [lessonData, setLessonData] = useState({
    title: '',
    description: '',
    tasks: '',
    duration: '',
  });
  const [timer, setTimer] = useState(0);
  const [isIframeVisible, setIsIframeVisible] = useState(false);

  const jitsiUrl = `https://meet.jit.si/${lessonData.title}`;

  useEffect(() => {
    let interval;
    if (timer > 0 && isIframeVisible) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer, isIframeVisible]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleCreateLesson = () => {
    setIsLessonModalOpen(true);
  };

  const handleCreateMeeting = () => {
    setIsLessonModalOpen(false);
    setTimer(lessonData.duration * 60);
    setIsIframeVisible(true);
  };

  const handleEndCall = () => {
    setIsCallEnded(true);
    setIsIframeVisible(false);
  };

  const handleCloseBanner = () => {
    setIsCallEnded(false);
  };

  return (
    <div className="online-lesson">
      <Title children={'Онлайн урок'} />
      <div className="online-lesson__btn">
        <MainButton onClick={handleCreateLesson} children={'Создать урок'} />
        
      </div>
      <Modal
        isOpen={isLessonModalOpen}
        onRequestClose={() => setIsLessonModalOpen(false)}
        style={{
          overlay: {
            background: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '1000px',
            margin: '50px auto 0 ',
            height: '530px',
            border: '3px solid #f04973',
            borderRadius: '20px',
          },
        }}
      >
        <h2 className="online-lesson__title">Создание урока</h2>
        <div className="online-lesson__input">
          <div className="online-lesson__info">
            <label className="online-lesson__label">
              Название урока:
              <input
                type="text"
                value={lessonData.title}
                onChange={(e) =>
                  setLessonData({ ...lessonData, title: e.target.value })
                }
              />
            </label>
            <label className="online-lesson__label">
              Описание урока:
              <textarea
                value={lessonData.description}
                onChange={(e) =>
                  setLessonData({ ...lessonData, description: e.target.value })
                }
              />
            </label>
          </div>
          <div className="online-lesson__info">
            <label className="online-lesson__label online-lesson__label-time">
              Длительность урока (мин):
              <input
                type="number"
                value={lessonData.duration}
                onChange={(e) =>
                  setLessonData({ ...lessonData, duration: e.target.value })
                }
              />
            </label>
            <label className="online-lesson__label">
              Задачи урока:
              <textarea
                value={lessonData.tasks}
                onChange={(e) =>
                  setLessonData({ ...lessonData, tasks: e.target.value })
                }
              />
            </label>
          </div>
        </div>
        <div className="online-lesson__btn online-lesson__btn-form">
          <MainButton onClick={handleCreateMeeting} children={'Создать урок'} />
        </div>
      </Modal>
      {isIframeVisible && (
        <div>
          <div className="online-lesson__main-content">
            <div className="online-lesson__main-iframe">
            <iframe
            src={jitsiUrl}
            allow="camera; microphone; fullscreen; display-capture"
            width="1000"
            height="600"
            
          ></iframe>
          <img src={icon} alt="" />
            </div>
           <div className="online-lesson__information">
            <p className="online-lesson__information-title">
              Название урока: <br /> <span>{lessonData.title}</span>
            </p>
            <p className="online-lesson__information-title">
              Описание урока: <br /> <span>{lessonData.description}</span>
            </p>
            <ul className="online-lesson__information-descr">
              Задачи урока: <br /> <p>{lessonData.tasks}</p>
            </ul>
            <div className="online-lesson__information-timer">
                 <p className='online-lesson__information-timer-time'>Осталось времени:</p>
                 <p className='online-lesson__information-timer-hour'> {formatTime(timer)}</p>
            </div>
            <p className='online-lesson__information-link'>
                <p> Ссылка на урок:{' '}</p>
              <a href={jitsiUrl} target="_blank" rel="noopener noreferrer">
                {jitsiUrl}
              </a>
            </p>
           <div className="online-lesson__information-btn">
           <MainButton onClick={handleEndCall} children={'Завершить звонок'}/>
           </div>
          </div>
          </div>
         
        </div>
      )}
      {isCallEnded && (
        <div className="online-lesson__banner">
          <p>Спасибо за урок!</p>
            <div className="online-lesson__banner-btn">
            <MainButton type='blue' onClick={handleCloseBanner} children={"Закрыть"}/>
            </div>
        </div>
      )}
    </div>
  );
};

export default OnlineLessonMeet;
