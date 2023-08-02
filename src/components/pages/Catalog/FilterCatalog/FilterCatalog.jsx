import React from 'react';
import './FilterCatalog.scss';
import { useDispatch, useSelector } from 'react-redux';
import SelectFormContainer from '../../../UI/Forms/SelectFormContainer/SelectFormContainer';
import {
    setLessonSpeak,
    setLessonTime,
    setLessonCountry,
    setLangSpeak,
} from '../../../../store/slices/filterSlice/filterSlice';

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
        </form>
    );
};

export default FilterCatalog;
