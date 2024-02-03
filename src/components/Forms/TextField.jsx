import PropTypes from "prop-types";
import {textFieldTypes} from "./inputTypes.js";
import "./TextField.scss"
export function TextField(props) {
    const {
        type,
        name,
        placeholder,
        ariaLabel,
        id,
        isDisabled,
        isHidden,
        isRequired,
        onChange,
        value,
    } = props
    return (
        <>
            <input
                className="basic-text-field"
                name={name}
                onChange={onChange}
                type={type}
                required={isRequired}
                id={id}
                placeholder={placeholder}
                aria-label={ariaLabel}
                disabled={isDisabled}
                hidden={isHidden}
                value={value}
                />
        </>
    )
}

TextField.defaultProps = {
    isHidden: false,
    isDisabled: false,
    placeholder: "",
    value: null,
    onChange: () => Promise.resolve()
}

TextField.propTypes = {
    value: PropTypes.string,
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
}