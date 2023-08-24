import React, { useState } from 'react';
import './TabsUserItem.scss';
import { v1 } from 'uuid';
import { isActive } from '../../../../utils/isActive';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';
import Video from '../../Video/Video';
import { useDispatch } from 'react-redux';
import { setUserPageId } from '../../../../store/slices/userPageSlice/userPageSlice';
import imagTable from '../../../../assets/images/catalog/table.jpg';
import imagTableWebp from '../../../../assets/images/catalog/table.jpg?as=webp';
import { Link } from 'react-router-dom';
import Picture from '../../../UI/Picture/Picture';

let styleView = {
    display: 'block',
};

let tabs = [
    {
        id: v1(),
        title: 'Видеоприветствие',
        value: 'video',
        clicked: true,
    },
    {
        id: v1(),
        title: 'Описание',
        value: 'description',
        clicked: false,
    },
    {
        id: v1(),
        title: 'Календарь',
        value: 'calendar',
        clicked: false,
    },
];

let titlesBtn = {
    lesson: 'Пробный урок',
    profile: 'Профиль преподавателя',
};

const TabsUserItem = ({ description, videoSrc, id }) => {
    let [tabList, setTabList] = useState(tabs);
    let [view, setView] = useState('video');
    let dispatch = useDispatch();

    const onBtnClickHandler = (id, value) => {
        let res = tabList.map((el) => {
            if (el.id === id) {
                el.clicked = true;
            } else {
                el.clicked = false;
            }

            return el;
        });

        setTabList([...res]);
        setView(value);
    };

    const onProfileClickHandler = () => {
        dispatch(setUserPageId(id));
    };

    return (
        <div className='tabs-item-catalog'>
            <div className='tabs-item-catalog__tab-wrap'>
                <div className='tabs-item-catalog__header'>
                    {tabList?.map((el) => (
                        <button
                            key={el.id}
                            onClick={() => {
                                onBtnClickHandler(el.id, el.value);
                            }}
                            className={`tabs-item-catalog__btn ${isActive(
                                el.clicked,
                                'active'
                            )}`}
                        >
                            {el.title}
                        </button>
                    ))}
                </div>
                <div className='tabs-item-catalog__body'>
                    <div
                        style={view === 'video' ? styleView : {}}
                        className='tabs-item-catalog__item'
                    >
                        <Video
                            src={videoSrc}
                            className='tabs-item-catalog__video-wrap'
                        />
                    </div>
                    <div
                        style={view === 'description' ? styleView : {}}
                        className='tabs-item-catalog__item'
                    >
                        {description}
                    </div>
                    <div
                        style={view === 'calendar' ? styleView : {}}
                        className='tabs-item-catalog__item'
                    >
                        <Link to='/teacher'
                            onClick={onProfileClickHandler}>
                            <Picture
                                img={imagTable}
                                webp={imagTableWebp}
                                alt={'Календарь'}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='tabs-item-catalog__footer'>
                <MainButton maxWidth='161px'>
                    {titlesBtn.lesson}
                </MainButton>
                <MainButton to='/teacher' type='white' onClick={onProfileClickHandler}>
                    {titlesBtn.profile}
                </MainButton>
            </div>
        </div>
    );
};

export default TabsUserItem;
