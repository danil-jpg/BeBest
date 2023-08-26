import React from 'react';
import SelectForm from '../SelectForm/SelectForm';
import s from './SelectFormContainer.module.scss';
import PropTypes from 'prop-types';

const SelectFormContainer = ({ style = {}, title = '', list, setItem, mb = '23px' }) => {
    let styles = {
        marginBottom: `${mb}`,
        ...style
    }
    return (
        <div className={`${s.selectContainer}`}
            style={styles}>
            <p className={s.selectContainer__title}>{title}</p>
            <SelectForm list={list} setItem={setItem} />
        </div>
    );
};

SelectFormContainer.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    list: PropTypes.array,
    setItem: PropTypes.func
}

export default SelectFormContainer;
