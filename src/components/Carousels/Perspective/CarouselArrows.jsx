import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import cx from "classnames";
import "./style.scss"

export const CarouselArrows = (props) => {
    const {
        arrowCall,
        leftActive,
        rightActive,
        id,
    } = props;

    const [leftArrow, setLeftArrow] = useState("not-visible")
    const [rightArrow, setRightArrow] = useState("")

    useEffect(() => {
        if (leftActive) {
            setLeftArrow("")
        } else {
            setLeftArrow("not-visible")
        }
        if (rightActive) {
            setRightArrow("")
        } else {
            setRightArrow("not-visible")
        }
    }, [leftActive, rightActive]);

    return (
        <>
            <a className={cx("slider-left", leftArrow)} id={id + "_left_arrow"} onClick={arrowCall}>
                <i>&#10550;</i>
                </a>
                <a className={cx("slider-right", rightArrow)} id={id + "_right_arrow"} onClick={arrowCall}>
                    <i>&#10551;</i>
            </a>
        </>
    )
}

CarouselArrows.propTypes = {
        arrowCall: PropTypes.func,
        leftActive : PropTypes.bool,
        rightActive: PropTypes.bool,
        id: PropTypes.string,
}