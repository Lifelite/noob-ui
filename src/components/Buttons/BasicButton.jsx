import PropTypes from "prop-types";
import "./Button.scss"
import {useRef} from "react";

export function BasicButton(props) {
    const {
        type,
        children,
        onClick,
        id,
        isDisabled,
        isHidden,
        isBusy,
        ariaLabel,
        //primaryColor,
    } = props;

    const buttonRef = useRef()

    //Basic button with hover effect that inverts the colors.  Will add color props when I feel like messing with it more

    // const handleOnHover = (e) => {
    //     if (!isDisabled) {
    //     e.target.style.background = primaryColor;
    //     e.target.style.color = 'black';
    // } else {
    //         e.target.background = 'grey';
    //         e.target.style.color = '#242424'
    //     }
    // }
    // const handleOffHover = (e) => {
    //     if (!isDisabled) {
    //     e.target.style.background = 'black';
    //     e.target.style.color = primaryColor;
    // }}

    return (
        <>
            <button
                ref={buttonRef}
                className="basic-button"
                id={id} onClick={onClick}
            //     style={{
            //         color: primaryColor,
            // }}
                // onMouseOver={handleOnHover}
                // onMouseOut={handleOffHover}
                // onFocus={handleOnHover}
                // onBlur={handleOffHover}
                type={type}
                disabled={isDisabled || isBusy}
                hidden={isHidden}
                aria-label={ariaLabel}
            >
                {children}
            </button>
        </>
    )
}

BasicButton.defaultProps = {
    onClick: () => Promise.resolve(),
    primaryColor: '#ffaf1b',
    isBusy: false,
    isHidden: false,
    isDisabled: false,
}

BasicButton.propTypes = {
    type: PropTypes.oneOf([
        "button",
        "submit",
        "reset",
    ]),
    children: PropTypes.node,
    onClick: PropTypes.func,
    id: PropTypes.string,
    isHidden: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isBusy: PropTypes.bool,
    ariaLabel: PropTypes.string,
    primaryColor: PropTypes.string
}