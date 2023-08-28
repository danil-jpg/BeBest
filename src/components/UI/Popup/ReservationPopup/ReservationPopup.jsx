import React from 'react';
import './ReservationPopup.scss';
import Popup from '../Popup';
import SelectFormContainer from '../../Forms/SelectFormContainer/SelectFormContainer';
import MainButton from '../../Buttons/MainButton/MainButton';
import { selectCard } from '../../../../store/slices/serviceSlice/serviceSlice';


const ReservationPopup = ({ period, maxWidth, top, left, style, show, setShow }) => {
    const getPeriodPrice = () => {
        let price = 0;

        period.list.forEach(el => {
            if (el.selected) price = el.price;
        })

        return price;
    }

    return (
        <Popup
            show={show}
            setShow={setShow}
            top={top}
            left={left}
            style={style}
            maxWidth={maxWidth}>
            <SelectFormContainer
                title={period.title}
                list={period.list}
                mb='15px'
                setItem={selectCard}
            />
            <p className="reservation-popup__text">
                <span>{period.titleSum}</span>
                <span>{getPeriodPrice()}</span>
            </p>
            <MainButton>{period.titleBtn}</MainButton>
        </Popup>
    );
};

ReservationPopup.propTypes = {
    // image: PropTypes.string,
    // title: PropTypes.string,
    // text: PropTypes.string,
    // maxWidth: PropTypes.string,
    // style: PropTypes.object
};

export default ReservationPopup;
