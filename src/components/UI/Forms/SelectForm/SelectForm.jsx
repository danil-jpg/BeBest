import React, { useRef, useState, useEffect } from 'react';
import s from './SelectForm.module.scss';
import { isActive } from '../../../../utils/isActive';
import { useDispatch } from 'react-redux';
import { setLangSpeak } from '../../../../store/slices/catalogSlice/catalogSlice';

const isSelected = elem => elem.selected;

const SelectForm = ({ style, list }) => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    let selectHeader = useRef(null);
    let select = useRef(null);
    let selectedItem = {};

    list.forEach((el) => {
        if (el.selected) {
            selectedItem = { ...el };
        }
    });

    useEffect(() => {
        function handleClickOutside(event) {
            if (select.current && !select.current.contains(event.target)) {
                setActive(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [select]);

    const onHeaderClickHandler = () => {
        setActive(!active);
    };

    const onItemClickHandler = (id) => {
        dispatch(setLangSpeak(id));
        onHeaderClickHandler();
    };

    return (
        <div
            ref={select}
            className={`${s.select} ${isActive(active, s.active)}`}
            style={style ? style : {}}
        >
            <p
                className={`${s.select__header} ${isActive(active, s.active)}`}
                onClick={onHeaderClickHandler}
                ref={selectHeader}
            >
                {selectedItem.title}
            </p>
            <ul className={`${s.select__list} ${isActive(active, s.active)}`}>
                {list.map(el => (
                    <li
                        key={el.id}
                        className={`${s.select__item} ${isActive(el.selected, s.selected)}`}
                        onClick={()=>{onItemClickHandler(el.id)}}
                    >
                        {el.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectForm;
