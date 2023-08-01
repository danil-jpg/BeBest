import React from 'react';
import './FilterCatalog.scss';
import SelectForm from '../../../UI/Forms/SelectForm/SelectForm';
import { useSelector } from 'react-redux';

const FilterCatalog = (props) => {
    let data = useSelector(state => state.catalogSlice);

    return <form className='filter-catalog'>
        <h2 className="filter-catalog__title">
            Фильтры
        </h2>
        <div className="filter-catalog__inner">
            <SelectForm list={data.langList} />
        </div>
    </form>;
};

export default FilterCatalog;
