import React from 'react';
import './SelectFormWithAdd.scss';
import PropTypes from 'prop-types';
import SelectFormContainer from '../SelectFormContainer/SelectFormContainer';
import { useDispatch } from 'react-redux';

const SelectFormWithAdd = ({ style = {}, title = '', lists, setItem, addItem, mb='23px' }) => {
    const dispatch = useDispatch();
    const styles = {
        marginBottom: `${mb}`,
        ...style
    }
    return (
        <div className="add-selects" style={styles}>
            <p className='add-selects__title'>{title}</p>
            {
                lists.map((list, index) => (
                    <div key={index} className="add-selects__select-list">
                        <SelectFormContainer
                            style={{ flex: ' 0 1 100%', margin: 0 }}
                            list={list}
                            setItem={setItem}
                        />
                        <button
                            className='add-selects__btn'
                            onClick={() => { dispatch(addItem()) }}></button>
                    </div>
                ))
            }
        </div>
    );
};

SelectFormWithAdd.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    list: PropTypes.array,
    setItem: PropTypes.func
}

export default SelectFormWithAdd;
