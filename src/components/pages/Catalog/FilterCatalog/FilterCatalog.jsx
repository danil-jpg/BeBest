import React from 'react';
import './FilterCatalog.scss';
import { useDispatch, useSelector } from 'react-redux';
import SelectFormContainer from '../../../UI/Forms/SelectFormContainer/SelectFormContainer';
import {
    setLessonSpeak,
    setLessonTime,
    setLessonCountry,
    setLangSpeak,
    setSex,
    setPreparingTest,
    setAspectLearn,
    setOldLearn
} from '../../../../store/slices/filterSlice/filterSlice';
import RangeSlider from '../../../UI/Forms/RangeSlider/RangeSlider';

const titlePrice = 'Цена';

const FilterCatalog = (props) => {
    let data = useSelector((state) => state.filterSlice);
    let dispatch = useDispatch();

    return (
        <form className='filter-catalog'>
            <h2 className='filter-catalog__title'>Фильтры</h2>
            <div className='filter-catalog__inner'>
                <SelectFormContainer
                    title={data.lessonSpeak.title}
                    list={data.lessonSpeak.list}
                    setItem={setLessonSpeak}
                />

                <SelectFormContainer
                    title={data.lessonTime.title}
                    list={data.lessonTime.list}
                    setItem={setLessonTime}
                />

                <SelectFormContainer
                    title={data.lessonCountry.title}
                    list={data.lessonCountry.list}
                    setItem={setLessonCountry}
                />

                <SelectFormContainer
                    title={data.langSpeak.title}
                    list={data.langSpeak.list}
                    setItem={setLangSpeak}
                />
            </div>
            <div className='filter-catalog__inner'>
                <RangeSlider title={titlePrice} />
            </div>
            <div className='filter-catalog__inner'>
                <SelectFormContainer
                    title={data.sex.title}
                    list={data.sex.list}
                    setItem={setSex}
                />

                <SelectFormContainer
                    title={data.preparingTest.title}
                    list={data.preparingTest.list}
                    setItem={setPreparingTest}
                />

                <SelectFormContainer
                    title={data.aspectLearn.title}
                    list={data.aspectLearn.list}
                    setItem={setAspectLearn}
                />

                <SelectFormContainer
                    title={data.oldLearn.title}
                    list={data.oldLearn.list}
                    setItem={setOldLearn}
                />
            </div>
        </form>
    );
};

export default FilterCatalog;
