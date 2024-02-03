import "./FancyCheckBox.scss"
import PropTypes from "prop-types";

export function FancyCheckBox(props) {
    const {
        // checked,
        value,
        // id,
        onChange,
    } = props;

    // SHELVING UNTIL I FIND A SOLUTION TO THE ID/STYLE PROBLEM.

    return (
        <div className="fancy-checkbox">
            <input type="checkbox" id={"_checkbox"} onChange={onChange} checked={value}/>
                <label htmlFor={"_checkbox"}>
                    <div id={"tick_mark"}></div>
                </label>
        </div>
    )
}

FancyCheckBox.propTypes = {
    checked: PropTypes.bool,
    value: PropTypes.bool,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func
}