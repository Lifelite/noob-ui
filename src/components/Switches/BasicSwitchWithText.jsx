import PropTypes from "prop-types";
import "./BasicSwitchWithText.scss"
export const BasicSwitchWithText = (props) => {
    const {
        id,
        value,
        onChange,
    } = props;

    return (
        <span className="switch basic-switch">
                <input onChange={onChange} type="checkbox" id={id} value={value}/>
                <label htmlFor={id}></label>
        </span>
)
}

BasicSwitchWithText.propTypes = {
    value: PropTypes.any,
    id: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}