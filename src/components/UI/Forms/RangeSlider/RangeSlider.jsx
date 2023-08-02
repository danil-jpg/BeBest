import React from 'react';
import './RangeSlider.scss';
import ReactSlider from 'react-slider';

const RangeSlider = () => {
    return (
        <ReactSlider
            className='range-slider'
            thumbClassName='example-thumb'
            trackClassName='example-track'
            defaultValue={[0, 100]}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={10}
        />
    );
};

export default RangeSlider;
