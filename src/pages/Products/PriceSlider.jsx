import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';
import './PriceRangeSlider.css';

const PriceRangeSlider = () => {
  const [value, setValue] = useState([130, 250]);

  useEffect(() => {
    document.getElementById('amount').value = `$${value[0]} - $${value[1]}`;
  }, [value]);

  const handleSliderChange = (values) => {
    setValue(values);
  };

  return (
    <div className="price-range-slider">
      <p className="range-value">
        <input type="text" id="amount" readOnly />
      </p>
      <ReactSlider
        className="range-bar"
        value={value}
        onChange={handleSliderChange}
        min={130}
        max={500}
        step={1}
        pearling
        minDistance={10}
        renderTrack={(props, state) => (
          <div {...props} className={state.index === 1 ? 'range-bar track-active' : 'range-bar track-inactive'} />
        )}
        renderThumb={(props, state) => <div {...props} className="thumb" />}
      />
    </div>
  );
};

export default PriceRangeSlider;
