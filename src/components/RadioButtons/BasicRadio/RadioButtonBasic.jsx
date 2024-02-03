import PropTypes from "prop-types";
import "./RadioButtonBasic.scss"
import {useEffect, useState} from "react";

export function RadioButtonBasic(props) {
    const {
        id,
        onClick,
        checked,
        value,
        text,
    } = props;

    const [checkRef, setCheckRef] = useState(false)

    useEffect(() => {


        if (checked) {
            setCheckRef(true)
        } else {
            setCheckRef(false)
        }
    }, [checked]);

    const classCheck = (checkRef) ? " checked" : "";


    return (
        <div className="radio-option-wrapper">
            <button id={id} className={"radio-option-label" + classCheck} onClick={onClick} value={value}>
                {/*<img src={check} alt={"check"} />*/}
                {text}
            </button>
        </div>
    )
}

RadioButtonBasic.defaultProps = {
    value: RadioButtonBasic.text,
}

RadioButtonBasic.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    checked: PropTypes.bool,
    value: PropTypes.string,
    text: PropTypes.string.isRequired,
}