import React, { useState } from 'react';
import './TabsUserItem.scss';
import { v1 } from 'uuid';
import { setTab } from '../../../../store/slices/tabsUserSlice/tabsUserSlice';
import { isActive } from '../../../../utils/isActive';

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

const TabsUserItem = () => {
    let [tabList, setTabList] = useState(tabs);
    let [view, setView] = useState('video');

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
                        1
                    </div>
                    <div
                        style={view === 'description' ? styleView : {}}
                        className='tabs-item-catalog__item'
                    >
                        2
                    </div>
                    <div
                        style={view === 'calendar' ? styleView : {}}
                        className='tabs-item-catalog__item'
                    >
                        3
                    </div>
                </div>
            </div>
            <div className='tabs-item-catalog__footer'>
                
            </div>
        </div>
    );
};

export default TabsUserItem;
