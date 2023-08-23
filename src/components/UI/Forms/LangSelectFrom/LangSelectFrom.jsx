import React, { useRef, useState, useEffect } from 'react';
import s from './LangSelectFrom.module.scss';
import { isActive } from '../../../../utils/isActive';
import { useDispatch } from 'react-redux';
import { setLang } from '../../../../store/slices/headerSlice/headerSlice';
import PropTypes from 'prop-types';

const LangSelectFrom = ({ style, list }) => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    let selectHeader = useRef(null);
    let select = useRef(null);
    let selectedLang = {};

    list.forEach((el) => {
        if (el.selected) {
            selectedLang = { ...el };
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
        dispatch(setLang(id));
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
                <img src={selectedLang.icon} alt='icon' />
                <span>{selectedLang.title}</span>
            </p>
            <ul className={`${s.select__list} ${isActive(active, s.active)}`}>
                {list.map(el => (
                    <li
                        key={el.id}
                        className={`${s.select__item}`}
                        onClick={()=>{onItemClickHandler(el.id)}}
                    >
                        <img src={el.icon} alt='icon' />
                        <span>{el.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

LangSelectFrom.propTypes = {
    style: PropTypes.object,
    list: PropTypes.array

};

export default LangSelectFrom;
