import "./style.scss"
import PropTypes from "prop-types";

export function RangeSlider(props) {
    const {
        min,
        max,
        onChange,
        onInput,
        step,
        value,
        id
    } = props;


    return (
        <>
            <div className="range-slider-container">

                <div className="range-slider">
                    <input
                        type="range"
                        id={id}
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onInput={onInput}
                        onChange={onChange}
                        />

                </div>

                <div className="box-minmax">
                    <span className="min-text">{min}</span>
                    <span className="max-text">{max}</span>
                </div>

            </div>
        </>
    )
}

RangeSlider.propTypes = {
    id: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.any,
    onInput: PropTypes.func,
    onChange: PropTypes.func,
}