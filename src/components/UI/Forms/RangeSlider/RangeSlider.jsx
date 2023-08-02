import React, { useState } from 'react';
import './RangeSlider.scss';
import ReactSlider from 'react-slider';

const RangeSlider = ({title}) => {
    let start = 0;
    let end = 999;
    const [tracksValue, setTrackValue] = useState([start, end]);

    const onChangeValueHandler = (value, index) => {
        setTrackValue(value);
    };
    const renderThumb = (obj) => <div {...obj} aria-label='range-slider'></div>;

    return (
        <>
            <p className="range-slider__title">{title}</p>
            <div className='range-slider__values-wrap'>
                <p className='range-slider__value'>
                    {tracksValue[0]}
                </p>
                <span className='range-slider__value-delimiter'>-</span>
                <p className='range-slider__value'>
                    {tracksValue[1]}
                </p>
            </div>
            <ReactSlider
                min={start}
                max={end}
                className='range-slider'
                thumbClassName='range-slider__thumb'
                trackClassName='range-slider__track'
                defaultValue={[start, end]}
                renderThumb={renderThumb}
                onChange={onChangeValueHandler}
            />
        </>
    );
};

export default RangeSlider;
