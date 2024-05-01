import RangeSlider from "react-range-slider-input";
import {useState} from "react";

export default function TestPage() {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const handleSliderInput = values => {
        setMinValue(values[0]);
        setMaxValue(values[1]);
    };

    return (
        <div>
            <h1>ABOUT PAGE</h1>
            <br/>
            <div className='container'>
                <input
                    type="number"
                    value={minValue}
                    onInput={event => setMinValue(parseInt(event.target.value))}
                />
                <input
                    type="number"
                    value={maxValue}
                    onInput={event => setMaxValue(parseInt(event.target.value))}
                />
                <br/>
                <br/>
                <br/>
                <RangeSlider
                    value={[minValue, maxValue]}
                    onInput={handleSliderInput}
                    min={0}
                    max={100}
                    step={1}
                />
            </div>
        </div>
    );
}