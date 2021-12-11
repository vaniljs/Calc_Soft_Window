import Slider, { Range } from 'rc-slider';
import React, {useState} from "react";


const RangeSlider = (props) => {
    const {min, max, step, value, classBlock, title, titleInput,measure, valueHandler} = props;

    function sendDataRange(e) {
        valueHandler(e)
    }

    function sendDataInput(e) {
        valueHandler(e.target.value)
    }

    return (
        <div className={classBlock}>
            <div>
            <p className='titleRange'>{title}</p>
            <Slider
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={sendDataRange}/>
            </div>
            <div>
                <p title='titleInput'>{titleInput}</p>
                <div className="inputBlock">
                    <input
                        type="number"
                        value={value}
                        onInput={sendDataInput}/>
                        <p>{measure}</p>
                </div>
            </div>
        </div>
    )
};

export default RangeSlider;