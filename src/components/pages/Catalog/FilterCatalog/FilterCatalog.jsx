import React, { useEffect, useState } from 'react';
import './FilterCatalog.scss';
import { useDispatch, useSelector } from 'react-redux';
import SelectFormContainer from '../../../UI/Forms/SelectFormContainer/SelectFormContainer';
import {
    selectLessonSpeak,
    selectLessonTime,
    selectLessonCountry,
    selectLangSpeak,
    selectSex,
    selectPreparingTest,
    selectAspectLearn,
    clearFilter,
    selectYearLearn,
} from '../../../../store/slices/filterSlice/filterSlice';
import RangeSlider from '../../../UI/Forms/RangeSlider/RangeSlider';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';
import { Link } from 'react-router-dom';
import {
    setUserList,
    sortUsers,
} from '../../../../store/slices/catalogSlice/catalogSlice';

const titles = {
    filter: 'Фильтры',
    price: 'Цена',
    clear: 'Сбросить фильтр',
    submit: 'Применить',
};

const FilterCatalog = ({ users, setUsers }) => {
    let data = useSelector((state) => state.filterSlice);
    let dispatch = useDispatch();

    const onClearClickHandler = () => {
        dispatch(clearFilter());
        dispatch(setUserList([...users]));
    };

    const onSubmitClickHandler = () => {
        let selectedList = [];

        for (let itemFilter in data) {
            let list = data[itemFilter];
            data[itemFilter].list.forEach((el) => {
            if (el.selected) {
                selectedList.push({
                    [data[itemFilter].value]: el.title,
                });
            }
            });
        }

        if (!selectedList.length) {
            alert('Фильтры не выбраны');
        } else {
            dispatch(setUserList([...users]))
            dispatch(sortUsers(selectedList));
        }
    };

    return (
        <form className='filter-catalog'>
            <h2 className='filter-catalog__title'>{titles.filter}</h2>
            <div className='filter-catalog__body'>
                <div className='filter-catalog__inner'>
                    <SelectFormContainer
                        title={data.lessonSpeak.title}
                        list={data.lessonSpeak.list}
                        setItem={selectLessonSpeak}
                    />

                    <SelectFormContainer
                        title={data.lessonTime.title}
                        list={data.lessonTime.list}
                        setItem={selectLessonTime}
                    />

                    <SelectFormContainer
                        title={data.lessonCountry.title}
                        list={data.lessonCountry.list}
                        setItem={selectLessonCountry}
                    />

                    <SelectFormContainer
                        title={data.langSpeak.title}
                        list={data.langSpeak.list}
                        setItem={selectLangSpeak}
                    />
                </div>
                <div className='filter-catalog__inner'>
                    <RangeSlider title={titles.price} />
                </div>
                <div className='filter-catalog__inner filter-catalog__inner_last'>
                    <SelectFormContainer
                        title={data.sex.title}
                        list={data.sex.list}
                        setItem={selectSex}
                    />

                    <SelectFormContainer
                        title={data.preparingTest.title}
                        list={data.preparingTest.list}
                        setItem={selectPreparingTest}
                    />

                    <SelectFormContainer
                        title={data.aspectLearn.title}
                        list={data.aspectLearn.list}
                        setItem={selectAspectLearn}
                    />

                    <SelectFormContainer
                        title={data.yearLearn.title}
                        list={data.yearLearn.list}
                        setItem={selectYearLearn}
                    />
                </div>
                <div className='filter-catalog__footer'>
                    <MainButton
                        style={{
                            textTransform: 'uppercase',
                        }}
                        mb='18px'
                        onClick={onSubmitClickHandler}
                    >
                        {titles.submit}
                    </MainButton>
                    <Link
                        to=''
                        className='filter-catalog__clear-btn'
                        onClick={onClearClickHandler}
                    >
                        {titles.clear}
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default FilterCatalog;
