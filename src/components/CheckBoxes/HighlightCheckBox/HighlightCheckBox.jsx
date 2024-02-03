import "./style.scss"
import PropTypes from "prop-types";
import {useState} from "react";

export function HighlightCheckBox(props) {
    const {
        id,
        value,
        onChange,
    } = props;

    const [buttonOn, setButtonOn] = useState(value)
    const [buttonStyle, setButtonStyle] = useState(value ? "checked" : "")

    // useEffect(() => {
    //     if (buttonOn === true) {
    //         onChange(true)
    //         setButtonStyle("checked")
    //     } else if (buttonOn === false) {
    //         onChange(false)
    //         setButtonStyle("")
    //     }
    // }, [buttonOn])

    const handleButtonClick = () => {
        if (buttonOn === true) {
            onChange(false)
            setButtonOn(false)
            setButtonStyle("")
        } else if (buttonOn === false) {
            onChange(true)
            setButtonOn(true)
            setButtonStyle("checked")
        }


    }

    return (
        <div className="highlight-checkbox">
            <button className={"lns-checkbox " + buttonStyle} id={id} onClick={handleButtonClick}>
                <span>{(buttonOn ? "Enabled" : "Disabled")}</span>
            </button>
        </div>
    )
}

HighlightCheckBox.propTypes = {
    id: PropTypes.string,
    value: PropTypes.bool,
    children: PropTypes.node,
    onChange: PropTypes.func,
}