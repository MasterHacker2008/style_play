import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return value;
}

export default function RangeSlider(){
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
            <form>
                <label for="min">Min: {value[0]}</label>
                <input type='number' name='min' value={value}></input>
                <label>Max: {value[1]}</label>
                
                <input type='number' name='max' value={value}></input>
            </form>
        </Box>
    );
}