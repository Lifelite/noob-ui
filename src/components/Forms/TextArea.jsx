import PropTypes from "prop-types";
import {textFieldTypes} from "./inputTypes.js";
import "./TextField.scss"
export function TextArea(props) {
    const {
        name,
        placeholder,
        ariaLabel,
        id,
        isDisabled,
        isHidden,
        onChange,
        onClick,
        isRequired,
        value,
    } = props
    return (
        <>
            <textarea
                className="basic-text-field"
                name={name}
                onClick={onClick}
                onChange={onChange}
                id={id}
                placeholder={placeholder}
                aria-label={ariaLabel}
                disabled={isDisabled}
                hidden={isHidden}
                required={isRequired}
                value={value}
            />
        </>
    )
}

TextArea.defaultProps = {
    isHidden: false,
    isDisabled: false,
    placeholder: "",
    value: "",
}

TextArea.propTypes = {
    type: PropTypes.oneOf(
        textFieldTypes
    ),
    children: PropTypes.node,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    id: PropTypes.string,
    isHidden: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isBusy: PropTypes.bool,
    ariaLabel: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    isRequired: PropTypes.bool,
    value: PropTypes.string,
}